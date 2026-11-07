import Link from "next/link";
import classes from "./BlogItem.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { imageUrl } from "@/client";

const BlogItem = (props) => {
  const { t: translate } = useTranslation("blog");

  return (
    <li>
      <Link href={`/blogs/${props.id}`} className={classes.container}>
        <div
          className={`${classes.imgBox} img-blur`}
          style={{ "--blur": `url(${imageUrl(props.lazyThumbnail, 24)})` }}
        >
          <Image
            src={imageUrl(props.thumbnail, 800)}
            alt={props.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 400px"
          />
        </div>
        <div className={classes.content}>
          <div className={classes.meta}>
            <span className={classes.type}>
              {translate(`blog:${props.id}.type`)}
            </span>
            <span>{translate(`blog:${props.id}.date`)}</span>
          </div>
          <h3>{translate(`blog:${props.id}.title`)}</h3>
          <p>{translate(`blog:${props.id}.description`)}</p>
        </div>
      </Link>
    </li>
  );
};

export default BlogItem;
