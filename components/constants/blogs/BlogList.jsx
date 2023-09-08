import { Fragment } from "react";
import BlogItem from "./BlogItem";
import classes from "./BlogList.module.scss";
import { Heading } from "@chakra-ui/react";

const BlogList = ({ blogs }) => {
  console.log(blogs);
  return (
    <Fragment>
      <div className={classes.listContainer}>
        <div className={classes.content}>
          <Heading as="h3">Mutlaka Görmelisiniz</Heading>
          <span>
            Gelin Gümüldür ve yakınındaki görülmeye değer yerleri birlikte
            tanıyalım.
          </span>
        </div>
        <ul className={classes.list}>
          {blogs.map((item) => (
            <BlogItem
              key={item.id}
              id={item.id}
              imgUrl={item.imgUrl}
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
