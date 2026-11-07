import Link from "next/link";
import classes from "./HouseDetails.module.scss";
import { BiArea, BiCoffee, BiHome, BiPhone, BiWifi } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import { useTranslation } from "next-i18next";
import PhotoGrid from "@/components/ui/PhotoGrid";

const amenities = [
  { key: "bed", Icon: FaBed },
  { key: "security", Icon: GiCctvCamera },
  { key: "wifi", Icon: BiWifi },
  { key: "coffee", Icon: BiCoffee },
];

const HouseDetails = ({ title, photos = [] }) => {
  const { t: translate } = useTranslation(["house", "home"]);

  return (
    <article className={classes.page}>
      <header className={classes.header}>
        <h1>{title}</h1>
        <div className={classes.meta}>
          <span>
            <BiHome /> {translate(`house:${title}.type`)}
          </span>
          <span className={classes.dot}>·</span>
          <span>
            <BiArea /> {translate(`house:${title}.totalArea`)} m²
          </span>
        </div>
      </header>

      {photos.length > 0 && (
        <PhotoGrid
          images={photos}
          label={title}
          limit={5}
          showAllLabel={translate("house:show_all_photos", {
            count: photos.length,
          })}
        />
      )}

      <div className={classes.body}>
        <div className={classes.main}>
          <section>
            <h2>{translate("house:header_description")}</h2>
            <p>{translate(`house:${title}.description`)}</p>
          </section>

          <section>
            <h2>{translate("house:header_overview")}</h2>
            <ul className={classes.amenities}>
              {amenities.map(({ key, Icon }) => (
                <li key={key}>
                  <Icon className={classes.icon} />
                  {translate(`house:amenities.${key}`)}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className={classes.card}>
          <div className={classes.price}>
            <span>{translate("home:house_list.price")}</span>
            <strong>{translate("home:house_list.priceDescription")}</strong>
          </div>
          <p className={classes.note}>{translate("house:booking_note")}</p>
          <Link href="/contact" className={classes.primary}>
            {translate("house:book_now")}
          </Link>
          <Link
            href="https://wa.me/+905325104828"
            target="_blank"
            className={classes.secondary}
          >
            <IoLogoWhatsapp /> {translate("house:whatsapp")}
          </Link>
          <a href="tel:+905325104828" className={classes.call}>
            <BiPhone /> {translate("house:call_us")}
          </a>
        </aside>
      </div>
    </article>
  );
};

export default HouseDetails;
