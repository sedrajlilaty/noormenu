import { useLocation } from 'react-router-dom'
import { useCart } from './CartContext'
import { Link } from 'react-router-dom'
export default function CartBar() {
  const { totalItems, totalPrice } = useCart()
  const location = useLocation()
  const isCartPage = location.pathname === '/cart'

  if (totalItems === 0 || isCartPage) return null
  return (
  <Link
    to="/cart"
    className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#333] text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center justify-between w-[90%] max-w-[400px]"
  >
    <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm font-bold">
      {totalItems}
    </span>
    <span className="font-bold">عرض السلة</span>
    <span className="font-bold">{totalPrice} ليرة</span>
  </Link>
)}
