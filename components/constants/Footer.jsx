import classes from "./Footer.module.scss";
import { BiLogoInstagram, BiLogoFacebookSquare, BiPhone } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.columnContainer}>
        <h3>Ars Concept Houses</h3>
        <p>
          description text Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Possimus ex nulla temporibus modi dolorem asperiores enim
          repudiandae aliquam.
        </p>

        <BiLogoInstagram className={classes.icon} />
        <BiLogoFacebookSquare className={classes.icon} />
      </div>
      <div className={classes.columnContainer}>
        <h3>İletişim</h3>
        <p>
          description text Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Possimus ex nulla temporibus modi dolorem asperiores enim
          repudiandae aliquam.
        </p>
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
        <div className={classes.rowContainer}>
          <HiOutlineMail className={classes.icon} />
          <span>filtur2003@hotmail.com </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
