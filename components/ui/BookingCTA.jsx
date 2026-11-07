import Link from "next/link";
import { useTranslation } from "next-i18next";
import { IoLogoWhatsapp } from "react-icons/io";
import classes from "./BookingCTA.module.scss";

const BookingCTA = () => {
  const { t: translate } = useTranslation("home");

  return (
    <section className="section">
      <div className={classes.box}>
        <h2>{translate("home:cta.title")}</h2>
        <p>{translate("home:cta.text")}</p>
        <div className={classes.actions}>
          <a
            href="https://wa.me/+905325104828"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.whatsapp}
          >
            <IoLogoWhatsapp /> {translate("home:cta.whatsapp")}
          </a>
          <Link href="/contact" className={classes.contact}>
            {translate("home:cta.contact")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
