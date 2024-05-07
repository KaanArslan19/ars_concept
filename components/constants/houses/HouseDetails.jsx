import Image from "next/image";
import classes from "./HouseDetails.module.scss";
import { BiCoffee, BiWifi } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { useTranslation } from "next-i18next";
import { urlFor } from "@/client";

const HouseDetails = ({ id, title, thumbnail }) => {
  const { t: translate } = useTranslation("house");

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>{title}</h1>

        <div className={classes.imgBox}>
          <Image
            src={urlFor(thumbnail).url()}
            fill={true}
            style={{ objectFit: "contain" }}
            alt={`thumbnail-${title}`}
          />
        </div>
      </div>

      <div>
        <h3>{translate("house:header_description")}</h3>
        <p>{translate(`house:${title}.description`)}</p>
      </div>
      <div className={classes.contentOverview}>
        <h3>{translate("house:header_overview")}</h3>
        <div className={classes.table}>
          <div className={classes.tableColumn}>
            <div className={classes.tableRow}>
              <FaBed className={classes.icon} /> Double Bed
            </div>
            <div className={classes.tableRow}>
              <GiCctvCamera className={classes.icon} />
              Security
            </div>
          </div>
          <div className={classes.tableColumn}>
            <div className={classes.tableRow}>
              <BiWifi className={classes.icon} />
              Wifi
            </div>
            <div className={classes.tableRow}>
              <BiCoffee className={classes.icon} />
              Coffee Machine
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
