import classes from "./Navbar.module.scss";

import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import HamburgerMenu from "../ui/HamburgerMenu";

const navbarItems = [
  { title: "Anasayfa", url: "/" },
  { title: "Hakkımızda", url: "/about" },
  { title: "Galeri", url: "/gallery" },
  { title: "Rezervasyon", url: "reservation" },
  { title: "İletişim", url: "/contact" },
];
const Navbar = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <nav className={classes.container}>
      <Link href="/">
        <Image
          src="/images/ars_concept_logo.png"
          width={100}
          height={100}
          alt="ars_concept_logo"
          className={classes.logo}
        />
      </Link>
      {!isMobile ? (
        <div className={classes.content}>
          <ul className={classes.listItems}>
            {navbarItems.map((item) => (
              <li key={`link-${item.title}`}>
                <Link href={`/${item.url}`}>{item.title}</Link>
              </li>
            ))}
          </ul>

          <div className={classes.imageContainer}>
            <Image
              src="/images/turkey_flag.png"
              width={24}
              height={24}
              alt="turkey_flag"
            />
            <Image
              src="/images/great_britain_flag.png"
              width={24}
              height={24}
              alt="great_britain_flag"
            />
          </div>
        </div>
      ) : (
        <HamburgerMenu navbarItems={navbarItems} />
      )}
    </nav>
  );
};

export default Navbar;
