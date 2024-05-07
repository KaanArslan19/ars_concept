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
import Image from "next/image";
import { urlFor } from "@/client";

const Slider = ({ listings }) => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const router = useRouter();
  const { t: translate } = useTranslation("home");
  const mappedData = listings.map((item) => {
    return {
      id: item._id,
      title: item.title,
      thumbnail: item.thumbnail,
    };
  });

  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ type: "progressbar" }}
      effect="fade"
      modules={[EffectFade]}
      autoplay={{ delay: 3000 }}
    >
      {mappedData &&
        mappedData.map((item) => (
          <SwiperSlide
            key={item.id}
            onClick={() => router.push(`listings/${item.id}`)}
          >
            <div className={classes.imgContainer}>
              <Image
                src={urlFor(item.thumbnail).url()}
                alt={item.title}
                fill="true"
                style={{ objectFit: "cover" }}
                onClick={() => router.push(`listings/${item.id}`)}
              />
            </div>

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
