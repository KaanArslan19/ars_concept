import Link from "next/link";
import classes from "./HouseItem.module.scss";
import Image from "next/image";
import { BiArea, BiHome, BiMoney } from "react-icons/bi";
import { useTranslation } from "next-i18next";

const HouseItem = (props) => {
  const { t: translate } = useTranslation("home");

  return (
    <Link href={`/listings/${props.id}`}>
      <li className={classes.container}>
        <Image
          src={props.coverPhoto}
          alt={props.title}
          width={1920}
          height={1080}
        />

        <div className={classes.content}>
          <h5>{props.title}</h5>
          <div className={classes.rowContainer}>
            <BiHome className={classes.icon} />
            {translate("home:house_list.type")}: <span>{props.type}</span>
          </div>

          <div className={classes.rowContainer}>
            <BiArea className={classes.icon} />
            {translate("home:house_list.totalArea")}:
            <span>{props.totalArea}m2</span>
          </div>
          <div className={classes.rowContainer}>
            <BiMoney className={classes.icon} />
            {translate("home:house_list.price")}:
            <span>{props.price} TL / gün</span>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default HouseItem;
