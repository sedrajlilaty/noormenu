import { useCart } from '../../context/CartContext'

function Toast() {
  const { showToast } = useCart()

  if (!showToast) return null

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-[100] flex items-center gap-2">
      <span>✓</span>
      <span className="font-bold">تمت الإضافة للسلة!</span>
    </div>
  )
}

export default Toast