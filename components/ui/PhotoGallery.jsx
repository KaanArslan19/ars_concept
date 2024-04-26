import Image from "next/image";
import classes from "./PhotoGallery.module.scss";
import Link from "next/link";
import { useState } from "react";

import { BiChevronLeft, BiChevronRight, BiWindowClose } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";
const PhotoGallery = ({ photos }) => {
  const [openImage, setOpenImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useBetterMediaQuery("(max-width: 768px)");
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const imageClickHandler = (index) => {
    setOpenImage(true);
    setCurrentIndex(index);
  };
  return (
    <div className={classes.container}>
      {photos.length !== 0 && (
        <>
          <h2> Photo Gallery</h2>
          <div className={classes.list}>
            {photos.map((item, index) => (
              <div key={item + index}>
                <button onClick={() => imageClickHandler(index)}>
                  <li className={classes.imgBox}>
                    <Image
                      src={item}
                      fill={true}
                      sizes="auto"
                      style={{ objectFit: "contain" }}
                      alt={item}
                    />
                  </li>
                </button>
                {!isMobile && openImage && (
                  <div className={classes.overlay}>
                    <div className={classes.overlayContent}>
                      <div className={classes.sliderContainer}>
                        <div onClick={goToPrevious} className={classes.arrow}>
                          <BiChevronLeft />
                        </div>
                        <div className={classes.imageContainer}>
                          <Image
                            src={photos[currentIndex]}
                            fill={true}
                            style={{ objectFit: "contain" }}
                            alt={photos[currentIndex]}
                          />
                          <div
                            onClick={() => setOpenImage(false)}
                            className={classes.closeBtn}
                          >
                            <AiOutlineClose />
                          </div>
                        </div>

                        <div onClick={goToNext} className={classes.arrow}>
                          <BiChevronRight />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
      <div>
        <Link href="/contact">
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
