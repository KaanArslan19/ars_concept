import Slider from "../ui/Slider";
import classes from "./Home.module.scss";
import Map from "../ui/Map/index";
import HouseList from "../constants/houses/HouseList";
import Footer from "../constants/Footer";
const Home = ({ listings }) => {
  return (
    <div className={classes.container}>
      <Slider listings={listings} />
      <HouseList listings={listings} />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
