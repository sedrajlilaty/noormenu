import TopBar from "./TopBar"
import logo from "../../assets/logo.webp"
import image from "../../assets/image.webp"
import { useLocation } from 'react-router-dom'

function Header({ onMenuClick }) {
  const location = useLocation()
  const isCartPage = location.pathname === '/cart'

  return (
    <>
      {!isCartPage && <TopBar />}

      <header className="sticky top-0 z-50  ">
        <div className="relative h-30 px-4 overflow-hidden">
          <img
            src={image}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20" />

          <div className="relative z-10 flex justify-between items-center  py-3 h-full">

            <div className="flex items-center gap-3">
              <img src={logo} className="h-[50px] w-auto rounded-full object-contain" />
              <span className="text-white font-extrabold text-3xl">مطعم النور</span>
            </div>

            <button className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center ml-1"onClick={onMenuClick}>
              <span className="text-white">☰</span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header