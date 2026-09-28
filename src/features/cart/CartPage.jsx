import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"

const areas = [
  { name: "المركز", fee: 0 },
  { name: "الأطراف", fee: 15 },
  { name: "خارج المدينة", fee: 30 },
]

const restaurantPhone = "905404355539"

export default function CartPage() {
  const { cart, increaseQuantity, decreaseQuantity, clearCart, totalPrice } = useCart()
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [area, setArea] = useState("")
  const [coupon, setCoupon] = useState("")
  const [discount, setDiscount] = useState(0)


  const [address, setAddress] = useState("")
  const [notes, setNotes] = useState("")

  if (cart.length === 0)
    return (
      <div className="main-container py-6">
        <div className="relative z-10 flex items-center justify-start mb-6 gap-4 bg-white rounded-xl px-4 py-3 shadow-sm">
          <button onClick={() => navigate('/')} className="text-main text-lg">
            <i className="fas fa-arrow-right"></i>
          </button>
          <h2 className="text-xl font-bold text-gray-800">سلة الطلبات</h2>
        </div>

        <div className="flex flex-col gap-3 items-center py-16">
          <i className="fas fa-basket-shopping text-6xl text-gray-300 mb-2"></i>
          <h2 className="font-bold text-gray-700 text-lg">السلة فارغة</h2>
          <p className="text-sm text-gray-400">
            لم تقم بإضافة أي منتج للسلة بعد
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-2 border border-main text-main rounded-full px-6 py-2 text-sm hover:bg-main hover:text-white transition"
          >
            تصفح القائمة
          </button>
        </div>
      </div>
    )

  function applyCoupon() {
    if (coupon.trim().toLowerCase() === "off10") {
      setDiscount(Math.round(totalPrice * 0.1))
    } else {
      alert("الكوبون غير صالح")
      setDiscount(0)
    }
  }

  const selectedAreaFee = areas.find((a) => a.name === area)?.fee || 0
  const tax = Math.round((totalPrice - discount) * 0.1)
  const finalTotal = totalPrice - discount + tax + selectedAreaFee

  function sendOrderOnWhatsapp() {
    if (!phone.trim()) {
      alert("لازم تحط رقم التواصل قبل ما ترسل الطلب")
      return
    }

    let msg = `طلب جديد من مطعم النور 🍔\n\n`

    cart.forEach((item) => {
      msg += `${item.name} × ${item.quantity} — ${item.priceNew * item.quantity} ليرة\n`
      if (item.selectedOptions && item.selectedOptions.length > 0) {
        msg += `  (${item.selectedOptions.map((o) => o.label).join('، ')})\n`
      }
    })

    msg += `\nمجموع المنتجات: ${totalPrice} ليرة`
    msg += `\nالخصم: -${discount} ليرة`
    msg += `\nالضريبة: +${tax} ليرة`
    msg += `\nرسوم التوصيل: ${selectedAreaFee} ليرة`
    msg += `\nالإجمالي النهائي: ${finalTotal} ليرة`

    msg += `\n\nالاسم: ${name || "-"}`
    msg += `\nرقم التواصل: ${phone}`
    msg += `\nالمنطقة: ${area || "-"}`
    msg += `\nالعنوان: ${address || "-"}`
    if (notes.trim()) msg += `\nملاحظات: ${notes}`

    const url = `https://wa.me/${restaurantPhone}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
  }

  return (
    <div className="main-container py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="relative z-10 flex items-center justify-start gap-4 bg-white rounded-xl px-4 py-3 shadow-sm grow">
          <button onClick={() => navigate('/')} className="text-main text-lg">
            <i className="fas fa-arrow-right"></i>
          </button>
          <h2 className="text-xl font-bold text-gray-800">سلة الطلبات</h2>
        </div>

        <button onClick={clearCart} className="text-red-500 text-sm font-bold mr-3 whitespace-nowrap">
          حذف الكل
        </button>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex bg-white rounded-2xl shadow-sm overflow-hidden">
            <img src={item.image} className="w-24 h-24 object-cover shrink-0" />

            <div className="flex flex-col justify-between p-3 grow min-w-0">
              <div>
                <h3 className="font-bold text-gray-800">{item.name}</h3>

                {item.selectedOptions && item.selectedOptions.length > 0 && (
                  <p className="text-xs text-gray-400 mt-1">
                    {item.selectedOptions.map((opt) => opt.label).join('، ')}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between mt-2">
                <span className="text-main font-bold">{item.priceNew} ليرة</span>

                <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-1">
                  <button onClick={() => increaseQuantity(item.id)} className="text-main font-bold">+</button>
                  <span className="font-bold w-4 text-center">{item.quantity}</span>
                  <button onClick={() => decreaseQuantity(item.id)} className="text-main font-bold">−</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
        <p className="font-bold text-gray-700 mb-3">🎟️ هل لديك كوبون خصم؟</p>
        <div className="flex gap-2">
          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="أدخل الكود"
            className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none"
          />
          <button
            onClick={applyCoupon}
            className="bg-main text-white rounded-full px-6 py-2 text-sm"
          >
            تطبيق
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
        <p className="font-bold text-gray-700 mb-3">تفاصيل الدفع</p>

        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>مجموع المنتجات</span>
          <span>{totalPrice} ليرة</span>
        </div>
        <div className="flex justify-between text-sm text-green-600 mb-2">
          <span>الخصم</span>
          <span>- {discount} ليرة</span>
        </div>
        <div className="flex justify-between text-sm text-red-500 mb-2">
          <span>الضريبة (10%)</span>
          <span>+ {tax} ليرة</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mb-3">
          <span>رسوم التوصيل</span>
          <span>{selectedAreaFee}</span>
        </div>

        <div className="border-t pt-3 flex justify-between font-bold text-lg">
          <span>الإجمالي النهائي</span>
          <span className="text-main">{finalTotal} ليرة</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
        <p className="flex items-center gap-2 font-bold text-gray-700 mb-3">
          <i className="fas fa-location-dot text-main"></i>
          بيانات الاستلام
        </p>

        <label className="block text-sm text-gray-600 mb-1">الاسم الكريم</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="الاسم"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-3 outline-none"
        />

        <label className="block text-sm text-gray-600 mb-1">
          رقم التواصل (واتساب أو اتصال) *
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="مثال: 0912345678"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-3 outline-none"
        />

        <label className="block text-sm text-gray-600 mb-1">
          المنطقة (لتحديد سعر التوصيل إن توفر)
        </label>
        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-3 outline-none"
        >
          <option value="">-- اختر منطقتك --</option>
          {areas.map((a) => (
            <option key={a.name} value={a.name}>{a.name}</option>
          ))}
        </select>

        <label className="block text-sm text-gray-600 mb-1">
          تفاصيل العنوان (الشارع، البناء)
        </label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="مثلا: جانب المسجد الكبير، بناية رقم 5"
          rows={2}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-3 outline-none"
        />

        <label className="block text-sm text-gray-600 mb-1">ملاحظات إضافية</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="أي ملاحظات إضافية..."
          rows={2}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none"
        />
      </div>

      <button
        onClick={sendOrderOnWhatsapp}
        className="w-full bg-green-500 text-white rounded-full py-3 font-bold flex items-center justify-center gap-2"
      >
        <i className="fab fa-whatsapp text-xl"></i>
        إرسال الطلب عبر واتساب
      </button>
    </div>
  )
}