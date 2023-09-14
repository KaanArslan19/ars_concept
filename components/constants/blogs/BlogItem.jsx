import Link from "next/link";
import classes from "./BlogItem.module.scss";
import Image from "next/image";
import { IoSparklesOutline } from "react-icons/io5";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";

const BlogItem = (props) => {
  const { t: translate } = useTranslation("blog");

  const [isOverflowing, setIsOverflowing] = useState(false);
  const paragraphRef = useRef(null);
  const maxLines = 2;
  const ellipsis = "...";

  useEffect(() => {
    const paragraphElement = paragraphRef.current;
    const lineHeight = parseFloat(
      window.getComputedStyle(paragraphElement).lineHeight
    );
    const maxHeight = lineHeight * maxLines;

    if (paragraphElement.clientHeight > maxHeight) {
      setIsOverflowing(true);
    }
  }, []);
  return (
    <Link href={`/blogs/${props.id}`}>
      <li className={classes.container}>
        <div className={classes.content}>
          <h5>{translate(`blog:${props.id}.title`)}</h5>
          <p
            id="restricted-paragraph"
            ref={paragraphRef}
            style={{
              overflow: "hidden",
              textOverflow: isOverflowing ? "ellipsis" : "clip",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: maxLines,
            }}
          >
            {translate(`blog:${props.id}.description`)}
          </p>
          {isOverflowing && <span>{ellipsis}</span>}
          <div className={classes.rowContainer}>
            <div className={classes.innerContent}>
              <span>{translate(`blog:${props.id}.date`)}</span>
              <span className={classes.innerContentType}>
                {translate(`blog:${props.id}.type`)}
              </span>
            </div>

            <IoSparklesOutline className={classes.icon} />
          </div>
        </div>
        <div className={classes.imgBox}>
          <Image
            src={props.imgUrl}
            alt={props.title}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      </li>
    </Link>
  );
};

export default BlogItem;