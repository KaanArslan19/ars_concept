import { Fragment } from "react";
import classes from "./HouseList.module.scss";
import HouseItem from "./HouseItem";
const HouseList = ({ listings }) => {
  return (
    <Fragment>
      <div className={classes.listContainer}>
        <div className={classes.content}>
          <h2>Header</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui non
            laborum asperiores fugit quas consequuntur labore aperiam
            perferendis commodi minus, maxime iusto ducimus aliquam cum.
          </span>
        </div>
        <ul className={classes.list}>
          {listings.map((item) => (
            <HouseItem
              key={item.id}
              id={item.id}
              coverPhoto={item.coverPhoto}
              title={item.title}
              description={item.description}
              price={item.price}
              type={item.type}
              totalArea={item.totalArea}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default HouseList;
