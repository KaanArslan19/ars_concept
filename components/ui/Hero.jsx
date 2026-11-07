import { useTranslation } from "next-i18next";
import HouseItem from "../constants/houses/HouseItem";
import classes from "./Hero.module.scss";

// The houses are the hero: headline, then the house cards
// (side by side on desktop, swipeable row on mobile).
const Hero = ({ listings }) => {
  const { t: translate } = useTranslation("home");

  return (
    <section id="houses" className={classes.hero}>
      <div className={classes.text}>
        <span className={classes.eyebrow}>
          {translate("home:slider.slogan")}
        </span>
        <h1>{translate("home:hero.title")}</h1>
        <p>{translate("home:hero.subtitle")}</p>
      </div>
      <ul className={classes.list}>
        {listings.map((item, index) => (
          <HouseItem
            key={item._id}
            id={item._id}
            thumbnail={item.thumbnail}
            lazyThumbnail={item.lazyThumbnail}
            title={item.title}
            priority={index === 0}
            sizes="(max-width: 640px) 85vw, 600px"
          />
        ))}
      </ul>
    </section>
  );
};

export default Hero;
