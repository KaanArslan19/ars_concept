import BlogItem from "./BlogItem";
import classes from "./BlogList.module.scss";
import { useTranslation } from "next-i18next";

const BlogList = ({ blogs }) => {
  const { t: translate } = useTranslation("home");

  return (
    <section className="section">
      <div className="section-header">
        <h2>{translate("home:blog_list.header")}</h2>
        <p>{translate("home:blog_list.description")}</p>
      </div>
      <ul className={classes.list}>
        {blogs.map((item) => (
          <BlogItem
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

export default BlogList;
