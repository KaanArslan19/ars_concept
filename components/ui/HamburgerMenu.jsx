import classes from "./HamburgerMenu.module.scss";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const HamburgerMenu = ({ navbarItems }) => {
  const [toggle, setToggle] = useState(false);

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
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
