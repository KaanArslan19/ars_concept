import Footer from "../constants/Footer";
import Navbar from "../constants/Navbar";
import classes from "./Layout.module.scss";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
const Layout = (props) => {
  return (
    <div className={classes.container}>
      <>
        <Navbar />
        <main>{props.children} </main>
        <div className={classes.iconContainer}>
          <Link
            href="https://wa.me/+905325104828"
            target="_blank"
            className={classes.link}
          >
            <IoLogoWhatsapp className={classes.icon} />
          </Link>
        </div>
      </>
      <footer className="w-full ">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
