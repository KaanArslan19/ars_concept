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
          <Heading as="h1">{translate("home:house_list.header")}</Heading>
          <span>{translate("home:house_list.description")}</span>
        </div>
        <ul className={classes.list}>
          {listings.map((item) => (
            <HouseItem
              key={item._id}
              id={item._id}
              thumbnail={item.thumbnail}
              title={item.title}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default HouseList;
