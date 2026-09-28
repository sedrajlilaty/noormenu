import { useState, useRef } from 'react'
import banners from '../../shared/data/banners.json'

function BannerSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slideRefs = useRef([])

  const goToSlide = (index) => {
    slideRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    })
    setActiveIndex(index)
  }

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-4 [&::-webkit-scrollbar]:hidden">
        {banners.map((banner, index) => (
          <img
            key={banner.id}
            ref={(el) => (slideRefs.current[index] = el)}
            src={banner.image}
            className="w-full sm:w-[calc(50%-8px)] shrink-0 snap-center h-40 sm:h-48 md:h-56 object-cover rounded-2xl"
          />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition ${
              activeIndex === index ? 'bg-main w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default BannerSlider