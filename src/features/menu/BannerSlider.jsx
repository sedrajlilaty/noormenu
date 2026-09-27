import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import banners from '../../shared/data/banners.json'

function BannerSlider() {
  return (
    <div className="">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            autoplay: false,
          },
        }}
        className="rounded-2xl w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img
              src={banner.image}
className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-2xl"            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BannerSlider