import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "./silder.css";
import { silderContent } from "../Assent/Data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Silder = () => {
  return (
    <div className="silder">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination, EffectCoverflow, Autoplay]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 400,
          modifier: 1,
          slideShadows: false,
          scale:1 ,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween:0
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        pagination={{
          clickable: true,
        }}
        loop
        effect="coverflow"
      >
        {silderContent.map((el, i) => {
          return (
            <SwiperSlide style={{ width: "fit-content" }} key={i}>
              <img src={el.img} alt="slide" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Silder;
