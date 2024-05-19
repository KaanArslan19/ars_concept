import Link from "next/link";
import classes from "./HouseItem.module.scss";
import Image from "next/image";
import { BiArea, BiHome, BiMoney } from "react-icons/bi";
import { useTranslation } from "next-i18next";
import { urlFor } from "@/client";
import { useState } from "react";

const HouseItem = (props) => {
  const { t: translate } = useTranslation(["home", "house"]);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link href={`/listings/${props.id}`}>
      <li className={classes.container}>
        <div className={classes.imgBox}>
          <Image
            src={
              !isLoaded
                ? urlFor(props.lazyThumbnail).url()
                : urlFor(props.thumbnail).url()
            }
            alt={props.title}
            fill="true"
            style={{ objectFit: "cover" }}
            onLoad={() => setIsLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className={classes.content}>
          <h5>{props.title}</h5>
          <div className={classes.rowContainer}>
            <BiHome className={classes.icon} />
            <span>{translate("home:house_list.type")}</span>:{" "}
            {translate(`house:${props.title}.type`)}
          </div>

          <div className={classes.rowContainer}>
            <BiArea className={classes.icon} />
            <span>{translate("home:house_list.totalArea")} </span>:{" "}
            {translate(`house:${props.title}.totalArea`)} m2
          </div>
          <div className={classes.rowContainer}>
            <BiMoney className={classes.icon} />
            <span>{translate("home:house_list.price")} </span>:{" "}
            {translate(`home:house_list.priceDescription`)}
          </div>
        </div>
      </li>
    </Link>
  );
};

export default HouseItem;
