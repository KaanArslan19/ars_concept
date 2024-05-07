import { Fragment } from "react";
import BlogItem from "./BlogItem";
import classes from "./BlogList.module.scss";
import { Heading } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const BlogList = ({ blogs }) => {
  const { t: translate } = useTranslation("home");

  return (
    <Fragment>
      <div className={classes.listContainer}>
        <div className={classes.content}>
          <Heading as="h3">{translate("home:blog_list.header")}</Heading>
          <span>{translate("home:blog_list.description")}</span>
        </div>
        <ul className={classes.list}>
          {blogs.map((item) => (
            <BlogItem
              key={item._id}
              id={item._id}
              imgUrl={item.thumbnail}
              title={item.title}
              description={item.description}
              date={item.date}
              type={item.type}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default BlogList;
