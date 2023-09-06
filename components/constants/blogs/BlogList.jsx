import { Fragment } from "react";
import BlogItem from "./BlogItem";
import classes from "./BlogList.module.scss";

const BlogList = ({ blogs }) => {
  console.log(blogs);
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
