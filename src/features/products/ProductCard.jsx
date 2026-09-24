import { useState } from "react"

function ProductCard({ product, onAddToCart, onOpenOptions }) {
  const [quantity, setQuantity] = useState(0)
  const hasDiscount = product.priceOld !== product.priceNew
  const max_length=30 
  const long=product.description.length >max_length
  const shortText=long
  ? product.description.slice(0, max_length) + '...'
  : product.description
const increase = () => {
    const newQty = quantity + 1
    setQuantity(newQty)
    onAddToCart(product, newQty)
  }

  const decrease = () => {
    if (quantity === 0) return
    const newQty = quantity - 1
    setQuantity(newQty)
    onAddToCart(product, newQty)
  }
  const handleSelect = () => {
    if (product.hasOptions) {
      onOpenOptions(product)
    } else {
      setQuantity(1)
      onAddToCart(product)
    }
  }

return(
<div className="flex bg-white rounded-xl overflow-hidden shadow-sm min-h-[130px] gap-3">
        <img
        src={product.image}
         className="w-[130px] h-[170px] object-cover shrink-0"
        />
        <div className="flex flex-col justify-between p-6 grow ml-4 ">
          
        <h3 className="font-bold text-gray-800 mb-1">
{product.name}
        </h3 >
<p className="text-sm text-gray-400">
    {shortText}
    {long && (
      <button
        onClick={() => onOpenOptions(product)}
        className="text-main font-bold mr-1"
      >
        المزيد..
      </button>
    )}
  </p>        <div className="flex justify-between items-center">
           <div className="flex items-center gap-3">
  <span className="text-main font-bold text-lg">{product.priceNew} ليرة</span>
  {hasDiscount && (
    <span className="text-gray-400 text-sm line-through">{product.priceOld}</span>
  )}
</div>
           {product.hasOptions ? (
        <button
  onClick={() => onOpenOptions(product)}
  className="px-8 py-2 rounded-full border border-main text-main text-sm font-bold whitespace-nowrap"
>
  اختر
</button>
      ) : (
        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-1">
          <button onClick={increase} className="text-main font-bold">+</button>
          <span className="font-bold w-4 text-center">{quantity}</span>
          <button onClick={decrease} className="text-main font-bold">−</button>
        </div>
      )}
       
        </div>
        </div>
    </div>
)

}

export default ProductCard