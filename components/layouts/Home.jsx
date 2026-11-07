import Hero from "../ui/Hero";
import classes from "./Home.module.scss";
import Map from "../ui/Map/index";
import HouseList from "../constants/houses/HouseList";
import BlogList from "../constants/blogs/BlogList";
import FAQ from "../ui/FAQ";
const Home = ({ listings, blogs }) => {
  return (
    <div className={classes.container}>
      <Hero listings={listings} />
      <HouseList listings={listings} />
      <BlogList blogs={blogs} />
      <FAQ />
      <Map />
    </div>
  );
};

export default Home;
