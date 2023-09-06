import Slider from "../ui/Slider";
import classes from "./Home.module.scss";
import Map from "../ui/Map/index";
import HouseList from "../constants/houses/HouseList";
import Footer from "../constants/Footer";
import BlogList from "../constants/blogs/BlogList";
const Home = ({ listings, blogs }) => {
  return (
    <div className={classes.container}>
      <Slider listings={listings} />
      <HouseList listings={listings} />
      <BlogList blogs={blogs} />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
