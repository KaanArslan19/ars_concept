import Hero from "../ui/Hero";
import classes from "./Home.module.scss";
import Map from "../ui/Map/index";
import BlogList from "../constants/blogs/BlogList";
import FAQ from "../ui/FAQ";
import GalleryTeaser from "../ui/GalleryTeaser";
import BookingCTA from "../ui/BookingCTA";
const Home = ({ listings, blogs, galleryPreview }) => {
  return (
    <div className={classes.container}>
      <Hero listings={listings} />
      <GalleryTeaser images={galleryPreview} />
      <FAQ />
      <Map />
      <BlogList blogs={blogs} />
      <BookingCTA />
    </div>
  );
};

export default Home;
