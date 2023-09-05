import Slider from "../ui/Slider";
import classes from "./Home.module.scss";

const Home = ({ listings }) => {
  return (
    <div className={classes.container}>
      <Slider listings={listings} />
    </div>
  );
};

export default Home;
