import { useState } from "react"
import { useCart } from '../../context/CartContext'
import ProductModal from './Productmodal '

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const hasDiscount = product.priceOld !== product.priceNew
  const max_length = 30
  const long = product.description.length > max_length
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCart()

  // const increase = () => {
  //   const newQty = quantity + 1
  //   setQuantity(newQty)
  //   onAddToCart(product, newQty)
  // }

  // const decrease = () => {
  //   if (quantity === 0) return
  //   const newQty = quantity - 1
  //   setQuantity(newQty)
  //   onAddToCart(product, newQty)
  // }

  // const handleSelect = () => {
  //   if (product.hasOptions) {
  //     onOpenOptions(product)
  //   } else {
  //     setQuantity(1)
  //     onAddToCart(product)
  //   }
  // }
  const cartItem = cart.find((item) => item.id === product.id)
  const quantity = cartItem ? cartItem.quantity : 0
  const shortText = long
    ? product.description.slice(0, max_length) + '...'
    : product.description

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleSelect = () => {
    if (product.hasOptions) {
      openModal()
    } else {
      addToCart(product)
    }
  }

  return (
    <>
      <div className="flex bg-white rounded-2xl overflow-hidden shadow-sm min-h-[130px] ">
        <img
          src={product.image}
          className="w-[130px] h-[170px] object-cover shrink-0"
        />
        <div className="flex flex-col min-w-0 px-3 py-4 grow ">

          <h3 className="font-bold text-gray-800">
            {product.name}
          </h3>

          <p className="text-sm text-gray-400 leading-6 mt-1">
            {shortText}
            {long && (
              <button
                type="button"
                onClick={openModal}
                className="text-main font-bold mr-1"
              >
                المزيد..
              </button>
            )}
          </p>

          <div className="flex w-full justify-between items-center mt-auto">
            <div className="flex items-center gap-3">
              <span className="text-main font-bold text-lg">{product.priceNew} ليرة</span>
              {hasDiscount && (
                <span className="text-gray-400 text-sm line-through">{product.priceOld}</span>
              )}
            </div>

            {product.hasOptions ? (
              <button
                type="button"
                onClick={handleSelect}
                className="shrink-0 border border-main text-main rounded-full px-6 py-2 text-sm whitespace-nowrap hover:bg-main hover:text-white transition"
              >
                اختر
              </button>
            ) : (
              <div className="shrink-0 flex items-center gap-3 bg-gray-100 rounded-full px-3 py-1">
                <button
                  type="button"
                  onClick={() => quantity === 0 ? addToCart(product) : increaseQuantity(product.id)}
                  className="text-main font-bold"
                >
                  +
                </button>
                <span className="font-bold w-4 text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => decreaseQuantity(product.id)}
                  className="text-main font-bold"
                >
                  −
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProductModal product={product} onClose={closeModal} />
      )}
    </>
  )
}

export default ProductCard