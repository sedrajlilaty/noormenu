import logo from "../../assets/logo.webp"

export default function SideMenu({ isOpen, onClose }) {
  if (!isOpen)
    return null

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40"
      ></div>

      <div dir className="fixed top-0 left-0 h-full w-100 bg-white z-[60] overflow-y-auto rounded-l-2xl">
        <div className="p-5 space-y-8">
          <button onClick={onClose} className="text-gray-500 text-xl">
            <i className="fas fa-xmark"></i>
          </button>

          <div className="flex flex-col items-center text-center">
            <img src={logo} className="h-14 w-14 rounded-full object-contain mb-2" />
            <h2 className="text-lg font-extrabold text-main">مطعم النور</h2>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="flex items-center gap-2 font-bold text-gray-800 mb-2">
              <i className="fas fa-store text-main"></i>
              من نحن
            </h3>
            <p className="text-sm text-gray-500 leading-6">
              نقدم لكم أشهى المأكولات المحضرة بعناية من أجود المكونات الطازجة، نسعى دائمًا لتقديم تجربة طعام لا تنسى تجمع بين الطعم الأصيل والخدمة المميزة.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="flex items-center gap-2 font-bold text-gray-800 mb-3">
              <i className="fas fa-location-dot text-main"></i>
              التواصل والعنوان
            </h3>

            <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
              <i className="fas fa-location-dot text-gray-400 mt-0.5"></i>
              <span>إسطنبول، الفاتح، شارع فوزي باشا</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <i className="fab fa-whatsapp text-green-500"></i>
              <span >905404355539</span>
            </div>
          </div>
        </div>

        <div className="border-t px-5 py-4 text-center text-xs text-gray-400">
          <p>© 2026 مطعم النور</p>
          <p className="mt-1">v1.0.0</p>
        </div>
      </div>
    </>
  )
}