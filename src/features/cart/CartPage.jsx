import { useCart } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
export default function CartPage() {
  const { cart } = useCart()
const navigate=useNavigate()
  if (cart.length === 0) 
    return (
<>
<div className="main-container py-6">
      <div className="relative z-10 flex items-center justify-start mb-6 gap-4 bg-white rounded-xl px-4 py-3 shadow-sm">
        <span>عودة للقائمة </span>
        <Link to="/" className="text-main text-lg">
          <i className="fas fa-arrow-right"></i>
        </Link>
        <h2 className="text-xl font-bold text-gray-800">سلة الطلبات </h2>
      </div>
<div className="flex flex-col gap-3  items-center">


<span className="fa">
<h2 className="color-gray-500 ">السلة فارغة</h2>
<p >
    لم تقم باضافة اي منتج للسلة بعد 
</p>
<button onClick={() => navigate('/')} className="shrink-0 border border-main text-main rounded-full px-6 py-2 text-sm whitespace-nowrap hover:bg-main hover:text-white">تصفح القائمة </button>
</span>
</div>
</>
)
  
}
