import { useState } from "react"
import { useCart } from '../../context/CartContext'

export default function ProductModal({ product, onClose }) {
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState({})
  const { addToCart } = useCart()

  if (!product) return null

  const toggleChoice = (groupIndex, choiceLabel) => {
    setSelected((prev) => {
      const current = prev[groupIndex] || []
      const exists = current.includes(choiceLabel)

      return {
        ...prev,
        [groupIndex]: exists
          ? current.filter((c) => c !== choiceLabel)
          : [...current, choiceLabel],
      }
    })
  }

  const extrasTotal = (product.optionGroups || []).reduce((sum, group, i) => {
    const chosen = selected[i] || []
    const groupSum = group.choices
      .filter((c) => chosen.includes(c.label))
      .reduce((s, c) => s + c.extraPrice, 0)
    return sum + groupSum
  }, 0)

  const unitPrice = product.priceNew + extrasTotal
  const totalPrice = unitPrice * quantity

  const handleAddToCart = () => {
    const chosenOptions = Object.entries(selected).flatMap(([groupIndex, labels]) => {
      const group = product.optionGroups[groupIndex]
      return labels.map((label) => {
        const choice = group.choices.find((c) => c.label === label)
        return { group: group.name, label, extraPrice: choice.extraPrice }
      })
    })

    addToCart(
      { ...product, priceNew: unitPrice },
      quantity,
      chosenOptions.length ? chosenOptions : null
    )
    onClose()
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center z-10"
        >
          <i className="fas fa-xmark"></i>
        </button>

        <img src={product.image} className="w-full h-56 object-cover" />

        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-bold text-gray-800 text-2xl text-right">{product.name}</h3>

            <div className="flex items-center gap-2">
              <span className="text-main font-bold text-lg">{product.priceNew}</span>
              {product.priceOld !== product.priceNew && (
                <span className="text-gray-400 text-sm line-through">{product.priceOld}</span>
              )}
              <span className="text-gray-400 text-sm">ليرة</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-6 mb-4">{product.description}</p>

          {product.hasOptions && product.optionGroups?.map((group, i) => (
            <div key={group.name} className="border-t pt-3 mb-3">
              <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-gray-800">{group.name}</span>

                <span className="text-xs text-gray-400">
                  {group.required ? "إلزامي" : "اختياري"}
                </span>
              </div>

              {group.choices.map((choice) => (
                <label
                  key={choice.label}
                  className="flex items-center justify-between py-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={(selected[i] || []).includes(choice.label)}
                    onChange={() => toggleChoice(i, choice.label)}
                    className="w-3.5 h-3.5 accent-main"
                  />
                  <span className="text-sm text-gray-600 px-2">{choice.label}</span>
                  {choice.extraPrice > 0 && (
                    <span className="text-xs text-gray-400 mr-auto">+{choice.extraPrice}</span>
                  )}
                </label>
              ))}
              
            </div>
          ))}

          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 mt-2">
            <span className="flex items-center gap-2 text-gray-700 font-bold">
              <i className="fas fa-basket-shopping"></i>
              الكمية
            </span>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="text-main font-bold text-lg"
              >
                +
              </button>
              <span className="font-bold w-4 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-main font-bold text-lg"
              >
                −
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="sticky bottom-0 w-full bg-main text-white flex items-center justify-between px-6 py-4"
        >
          <span className="flex items-center gap-2">
            <i className="fas fa-cart-shopping"></i>
            إضافة للسلة
          </span>
          <span>{totalPrice} ليرة</span>
        </button>
      </div>
    </div>
  )
}