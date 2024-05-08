import classes from "./Footer.module.scss";
import { BiLogoInstagram, BiLogoFacebookSquare, BiPhone } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t: translate } = useTranslation("home");

  return (
    <div className={classes.container}>
      <div className={`${classes.columnContainer} + ${classes.firstCol}`}>
        <h3>Ars Concept Houses</h3>
        <div>
          <Link
            href="https://www.instagram.com/arsconcepthouses/"
            target="_blank"
          >
            <BiLogoInstagram className={classes.icon} />
          </Link>
          <Link
            href="https://www.instagram.com/arsconcepthouses/"
            target="_blank"
          >
            <BiLogoFacebookSquare className={classes.icon} />
          </Link>
        </div>
      </div>
      <div className={classes.columnContainer}>
        <h3>{translate("home:footer.header")}</h3>
        <div className={classes.rowContainer}>
          <MdOutlineLocationOn className={classes.icon} />
          <span>
            İnönü Mahallesi, Teyfik Yılmaz Caddesi no:70 Gümüldür/Menderes
          </span>
        </div>

        <div className={classes.rowContainer}>
          <BiPhone className={classes.icon} />
          <span>+90 (532) 510 48 28 </span>
        </div>
        <Link href="" className={classes.rowContainer}>
          <HiOutlineMail className={classes.icon} />
          <span>arsconcepthouses@gmail.com</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
