import Footer from "../constants/Footer";
import Navbar from "../constants/Navbar";
import classes from "./Layout.module.scss";
const Layout = (props) => {
  return (
    <div className={classes.container}>
      <>
        <Navbar />
        <main>{props.children} </main>
      </>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
