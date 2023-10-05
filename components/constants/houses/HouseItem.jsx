import Link from "next/link";
import classes from "./HouseItem.module.scss";
import Image from "next/image";
import { BiArea, BiHome, BiMoney } from "react-icons/bi";
import { useTranslation } from "next-i18next";

const HouseItem = (props) => {
  const { t: translate } = useTranslation(["home", "house"]);

  return (
    <Link href={`/listings/${props.id}`}>
      <li className={classes.container}>
        <div className={classes.imgBox}>
          <Image
            src={props.coverPhoto}
            alt={props.title}
            fill="true"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={classes.content}>
          <h5>{props.title}</h5>
          <div className={classes.rowContainer}>
            <BiHome className={classes.icon} />
            <span>{translate("home:house_list.type")}</span>:{" "}
            {translate(`house:${props.id}.type`)}
          </div>

          <div className={classes.rowContainer}>
            <BiArea className={classes.icon} />
            <span>{translate("home:house_list.totalArea")} </span>:{" "}
            {translate(`house:${props.id}.totalArea`)} m2
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
