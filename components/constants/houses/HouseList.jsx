import { Fragment } from "react";
import classes from "./HouseList.module.scss";
import HouseItem from "./HouseItem";
import { Heading } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
const HouseList = ({ listings }) => {
  const { t: translate } = useTranslation("home");

  return (
    <Fragment>
      <div className={classes.listContainer}>
        <div className={classes.content}>
          <Heading>{translate("home:house_list.header")}</Heading>
          <span>{translate("home:house_list.description")}</span>
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
