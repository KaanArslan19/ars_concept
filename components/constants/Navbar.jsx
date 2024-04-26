import classes from "./Navbar.module.scss";

import Link from "next/link";
import Image from "next/image";

import HamburgerMenu from "../ui/HamburgerMenu";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";

const Navbar = () => {
  const { push } = useRouter();
  const { t: translate } = useTranslation("home");
  const navbarItems = [
    { title: "home", url: "/" },
    { title: "about", url: "/about" },
    { title: "gallery", url: "/gallery" },
    { title: "contact", url: "/contact" },
  ];

  const handleLangClick = (l) => () => {
    push("/", undefined, { locale: l });
  };
  const isMobile = useBetterMediaQuery("(max-width: 768px)");
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
                <Link href={`${item.url}`}>
                  {translate(`home:navbar.${item.title}`)}
                </Link>
              </li>
            ))}
          </ul>

          <div className={classes.imageContainer}>
            <Image
              src="/images/turkey_flag.png"
              width={24}
              height={24}
              alt="turkey_flag"
              onClick={handleLangClick("tr")}
            />
            <Image
              src="/images/great_britain_flag.png"
              width={24}
              height={24}
              alt="great_britain_flag"
              onClick={handleLangClick("en")}
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
