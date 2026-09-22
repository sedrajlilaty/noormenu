import { useState,useEffect } from "react"
import TopBar from "./TopBar"
import logo from "../../assets/logo.webp"
import image from "../../assets/image.webp"
function Header(){
    const [scrolled,setScrolled] =useState(false)
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

    return (<>
        <TopBar/>
         <header className={`sticky top-0 z-50 transition-all duration-300 px-4 py-3 ${
        scrolled ? 'bg-white shadow-sm' : ''
      }`}
      style={
        !scrolled
          ? {
              backgroundImage:
                'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }>
         {!scrolled && (
        <div className="relative h-23 overflow-hidden">
          <img
            src={image}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20" />

          <div className="relative z-10 flex justify-between items-center px-4 py-3 h-full">
           
            <div className="flex items-center gap-3 ">
                  <img src={logo} className="h-[50px] w-auto rounded-full object-contain" />

              <span className="text-white font-extrabold text-xl">مطعم النور</span>
               
            </div>
<button className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center ml-4">  <span className="text-white">☰</span>
</button>
          </div>
        </div>
      )}

      {scrolled && (
        <div className="flex justify-between items-center px-4 py-3 bg-white shadow-sm mg-4">
          
          <div className="flex items-center gap-3">
          <img src={image}  className="h-[50px] w-auto object-contain" />
            <span className="text-gray-800 font-extrabold text-xl">مطعم النور</span>

          </div>
<button className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center ml-4">  <span className="text-white">☰</span>
</button>
        </div>
      )}
     
    </header>
    </>
    )
}

export default Header