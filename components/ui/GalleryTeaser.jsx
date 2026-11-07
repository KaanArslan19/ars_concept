import Link from "next/link";
import { useTranslation } from "next-i18next";
import { BiGridAlt } from "react-icons/bi";
import PhotoGrid from "./PhotoGrid";
import classes from "./GalleryTeaser.module.scss";

const GalleryTeaser = ({ images }) => {
  const { t: translate } = useTranslation("home");
  if (!images?.length) return null;

  return (
    <section className="section">
      <div className={classes.header}>
        <div className="section-header">
          <h2>{translate("home:gallery_teaser.header")}</h2>
          <p>{translate("home:gallery_teaser.description")}</p>
        </div>
        <Link href="/gallery" className={classes.link}>
          <BiGridAlt /> {translate("home:gallery_teaser.cta")}
        </Link>
      </div>
      <PhotoGrid
        images={images}
        label={translate("home:gallery_teaser.header")}
        lazy
      />
    </section>
  );
};

export default GalleryTeaser;
