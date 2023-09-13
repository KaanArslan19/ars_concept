import Image from "next/image";
import classes from "./PhotoGallery.module.scss";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
const PhotoGallery = ({ photos }) => {
  console.log(photos[0]);
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const [openImage, setOpenImage] = useState(false);
  return (
    <div className={classes.container}>
      <h2> Photo Gallery</h2>
      <div className={classes.list}>
        {photos.map((item) => (
          <>
            <button onClick={() => setOpenImage(true)} key={item}>
              <li className={classes.imgBox}>
                <Image
                  src={item}
                  fill={true}
                  style={{ objectFit: "contain" }}
                  alt={item}
                />
              </li>
            </button>
            {openImage && (
              <div className={classes.overlay}>
                <div className={classes.overlayContent}>
                  <Swiper
                    slidesPerView={1}
                    navigation
                    effect="fade"
                    modules={[EffectFade]}
                    onClick={() => setOpenImage(false)}
                    style={{
                      width: "100%",
                      margin: "2rem",
                    }}
                  >
                    {photos.map((item, index) => (
                      <SwiperSlide key={item.index}>
                        <div
                          style={{
                            background: `url(${item}) center, no-repeat`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            cursor: "pointer",
                          }}
                          className={classes.swiperContainer}
                        ></div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <div>
        <Link href="">
          <button className={classes.bookingButton}>Book Now</button>
        </Link>
        <span>OR </span>
        <Link href="/contact" className={classes.callButton}>
          Call us
        </Link>
      </div>
    </div>
  );
};

export default PhotoGallery;
