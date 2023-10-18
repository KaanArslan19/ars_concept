import classes from "./HamburgerMenu.module.scss";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const HamburgerMenu = ({ navbarItems }) => {
  const { push } = useRouter();
  const { t: translate } = useTranslation("home");

  const [toggle, setToggle] = useState(false);
  const handleLangClick = (l) => () => {
    push("/", undefined, { locale: l });
    setToggle(false);
  };
  return (
    <div className={classes.container}>
      {!toggle ? (
        <BiMenu
          onClick={() => {
            setToggle(true);
          }}
          className={classes.icon}
        />
      ) : (
        <div className={classes.nav}>
          <div className={classes.navHeader}>
            <Image
              src="/images/ars_concept_logo.png"
              width={100}
              height={100}
              alt="ars_concept_logo"
            />
            <AiOutlineClose
              className={classes.icon}
              onClick={() => {
                setToggle(false);
              }}
            />
          </div>

          <ul className={classes.listItems}>
            {navbarItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.url}
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  {translate(`home:navbar.${item.title}`)}
                </Link>
              </li>
            ))}
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
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
