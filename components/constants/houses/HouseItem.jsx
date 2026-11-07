import Link from "next/link";
import classes from "./HouseItem.module.scss";
import Image from "next/image";
import { BiArea, BiHome } from "react-icons/bi";
import { useTranslation } from "next-i18next";
import { imageUrl } from "@/client";

const HouseItem = (props) => {
  const { t: translate } = useTranslation(["home", "house"]);

  return (
    <li>
      <Link href={`/listings/${props.id}`} className={classes.container}>
        <div
          className={`${classes.imgBox} img-blur`}
          style={{ "--blur": `url(${imageUrl(props.lazyThumbnail, 24)})` }}
        >
          <Image
            src={imageUrl(props.thumbnail, 800)}
            alt={props.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 400px"
          />
        </div>

        <div className={classes.content}>
          <h3>{props.title}</h3>
          <div className={classes.meta}>
            <span>
              <BiHome className={classes.icon} />
              {translate(`house:${props.title}.type`)}
            </span>
            <span className={classes.dot}>·</span>
            <span>
              <BiArea className={classes.icon} />
              {translate(`house:${props.title}.totalArea`)} m²
            </span>
          </div>
          <div className={classes.price}>
            {translate("home:house_list.price")}:{" "}
            <strong>{translate("home:house_list.priceDescription")}</strong>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default HouseItem;
