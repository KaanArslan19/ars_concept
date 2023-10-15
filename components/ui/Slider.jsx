import classes from "./Slider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Slider = ({ listings }) => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const router = useRouter();
  const { t: translate } = useTranslation("home");

  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ type: "progressbar" }}
      effect="fade"
      modules={[EffectFade]}
      autoplay={{ delay: 3000 }}
    >
      {listings.map((item) => (
        <SwiperSlide
          key={item.id}
          onClick={() => router.push(`listings/${item.id}`)}
        >
          <div
            style={{
              background: `url(${item.coverPhoto}) center, no-repeat`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
            }}
            className={classes.imgContainer}
          ></div>
          <span className={classes.contentInfo}>{item.title}</span>
          <span className={classes.slogan}>
            {translate("home:slider.slogan")}
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
