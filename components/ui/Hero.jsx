import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { imageUrl } from "@/client";
import classes from "./Hero.module.scss";

const HeroImage = ({ item, className, priority, sizes }) => (
  <Link
    href={`/listings/${item._id}`}
    className={`${classes.tile} ${className} img-blur`}
    style={{ "--blur": `url(${imageUrl(item.lazyThumbnail, 24)})` }}
  >
    <Image
      src={imageUrl(item.thumbnail, 1600)}
      alt={item.title}
      fill
      priority={priority}
      sizes={sizes}
      style={{ objectFit: "cover" }}
    />
    <span className={classes.label}>{item.title}</span>
  </Link>
);

const Hero = ({ listings }) => {
  const { t: translate } = useTranslation("home");
  const [main, ...rest] = listings;
  const side = rest.slice(0, 2);

  return (
    <section className={classes.hero}>
      <div className={classes.text}>
        <span className={classes.eyebrow}>
          {translate("home:slider.slogan")}
        </span>
        <h1>{translate("home:hero.title")}</h1>
        <p>{translate("home:hero.subtitle")}</p>
        <div className={classes.actions}>
          <a href="#houses" className={classes.primary}>
            {translate("home:hero.cta_houses")}
          </a>
          <Link href="/contact" className={classes.secondary}>
            {translate("home:hero.cta_contact")}
          </Link>
        </div>
      </div>

      {main && (
        <div
          className={`${classes.collage} ${
            side.length ? classes[`side${side.length}`] : ""
          }`}
        >
          <HeroImage
            item={main}
            className={classes.main}
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          {side.map((item) => (
            <HeroImage
              key={item._id}
              item={item}
              className={classes.side}
              sizes="40vw"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
