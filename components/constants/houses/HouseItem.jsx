import Link from "next/link";
import classes from "./HouseItem.module.scss";
import Image from "next/image";
import { BiArea, BiHome, BiMoney } from "react-icons/bi";
const HouseItem = (props) => {
  console.log(props);
  return (
    <Link href={`/listings/${props.title}`}>
      <li className={classes.container}>
        <Image
          src={props.coverPhoto}
          alt={props.title}
          width={1920}
          height={1080}
        />

        <div className={classes.content}>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
          <div className={classes.rowContainer}>
            <BiHome className={classes.icon} />
            Daire Tipi: <span>{props.type}</span>
          </div>

          <div className={classes.rowContainer}>
            <BiArea className={classes.icon} />
            Net Alan: <span>{props.totalArea}m2</span>
          </div>
          <div className={classes.rowContainer}>
            <BiMoney className={classes.icon} />
            Fiyat: <span>{props.price} TL / gün</span>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default HouseItem;
