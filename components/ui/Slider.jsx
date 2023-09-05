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
const Slider = ({ listings }) => {
  const namesArray = listings.map((obj) => obj.imgUrl);
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  console.log(namesArray[0]);
  const router = useRouter();
  return (
    <>
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
            onClick={() => router.push(`listings/${item.type}/${item.id}`)}
          >
            <div
              style={{
                background: `url(${item.imgUrl}) center, no-repeat`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
              }}
              className={classes.imgContainer}
            ></div>
            <p className={classes.contentInfo}>{item.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
