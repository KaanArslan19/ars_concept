import classes from "./BlogDetails.module.scss";
import Image from "next/image";
import { CgCalendarDates } from "react-icons/cg";
import { useTranslation } from "next-i18next";
import { imageUrl } from "@/client";

const BlogDetails = ({ id, title, thumbnail, lazyThumbnail }) => {
  const { t: translate } = useTranslation("blog");
  const paragraphs = translate(`blog:${id}.description`)
    .split("\n")
    .filter((p) => p.trim());

  return (
    <article className={classes.page}>
      <header className={classes.header}>
        <div className={classes.meta}>
          <span className={classes.type}>{translate(`blog:${id}.type`)}</span>
          <span className={classes.date}>
            <CgCalendarDates /> {translate(`blog:${id}.date`)}
          </span>
        </div>
        <h1>{translate(`blog:${id}.title`)}</h1>
      </header>

      <div
        className={`${classes.cover} img-blur`}
        style={{ "--blur": `url(${imageUrl(lazyThumbnail, 24)})` }}
      >
        <Image
          src={imageUrl(thumbnail, 1600)}
          alt={title}
          fill
          priority
          sizes="(max-width: 1000px) 100vw, 960px"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={classes.content}>
        {paragraphs.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </article>
  );
};

export default BlogDetails;
