import React from "react";
import { TestimeniolsContent } from "../Assent/Data";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay ,EffectCoverflow} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./Testimeniols.css";

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <div className="testimeniol">
      <h1 style={{textAlign:"center", fontSize:"54px", marginBottom:"40px"}}>{t("Testimeniol")}</h1>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        modules={[Navigation, Pagination, EffectCoverflow , Autoplay]}
        coverflowEffect={{
          rotate: 10,
          modifier: 3,
          depth: 0,
          slideShadows: false,
        }}
        autoplay = {
          {delay:5000, pauseOnMouseEnter:true}
        }
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop
        effect="coverflow"
      >
        {TestimeniolsContent.map((el, i) => {
          return (
            <SwiperSlide style={{ width: "fit-content" }} key={i}>
              <div className="testimeniol-box">
                <p>{t(el.Text)}</p>
                <h3>{t(el.name)}</h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
