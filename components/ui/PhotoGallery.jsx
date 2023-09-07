import Image from "next/image";
import classes from "./PhotoGallery.module.scss";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const PhotoGallery = ({ photos }) => {
  const [openImage, setOpenImage] = useState(false);
  return (
    <div className={classes.container}>
      <h2> Photo Gallery</h2>
      <div className={classes.list}>
        {photos.map((item) => (
          <>
            <button onClick={() => setOpenImage(true)}>
              <li className={classes.imgBox}>
                <Image
                  src={item}
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </li>
            </button>
            {openImage && (
              <div className={classes.overlay}>
                {" "}
                <div className={classes.overlayContent}>
                  <Image
                    src={item}
                    fill={true}
                    style={{ objectFit: "contain" }}
                    alt={item.title}
                    onClick={() => setOpenImage(false)}
                  />
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
