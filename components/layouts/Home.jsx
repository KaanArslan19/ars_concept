import Slider from "../ui/Slider";
import classes from "./Home.module.scss";
import Map from "../ui/Map/index";
import HouseList from "../constants/houses/HouseList";
import BlogList from "../constants/blogs/BlogList";
import FAQ from "../ui/FAQ";
const Home = ({ listings, blogs }) => {
  return (
    <div className={classes.container}>
      <Slider listings={listings} autoplay={{ delay: 3000 }} />
      <HouseList listings={listings} />
      <BlogList blogs={blogs} />
      <FAQ />
      <Map />
    </div>
  );
};

export default Home;
