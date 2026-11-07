import classes from "./HouseList.module.scss";
import HouseItem from "./HouseItem";
import { useTranslation } from "next-i18next";
const HouseList = ({ listings }) => {
  const { t: translate } = useTranslation("home");

  return (
    <section id="houses" className="section">
      <div className="section-header">
        <h2>{translate("home:house_list.header")}</h2>
        <p>{translate("home:house_list.description")}</p>
      </div>
      <ul className={classes.list}>
        {listings.map((item) => (
          <HouseItem
            key={item._id}
            id={item._id}
            thumbnail={item.thumbnail}
            lazyThumbnail={item.lazyThumbnail}
            title={item.title}
          />
        ))}
      </ul>
    </section>
  );
};

export default HouseList;
