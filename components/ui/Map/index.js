import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { BiCar, BiMap } from "react-icons/bi";
import { FaDirections } from "react-icons/fa";
import { ADDRESS, DIRECTIONS_URL } from "./location";
import classes from "./Map.module.scss";

// Leaflet needs `window`, so only the canvas is client-side.
const MapCanvas = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <div className={classes.placeholder} />,
});

const Map = () => {
  const { t: translate } = useTranslation("home");

  return (
    <section className="section">
      <div className={classes.header}>
        <div className="section-header">
          <h2>{translate("home:map.header")}</h2>
          <p className={classes.address}>
            <BiMap /> {ADDRESS}
          </p>
          <ul className={classes.facts}>
            <li>
              <BiCar /> {translate("home:map.sea")}
            </li>
            <li>
              <BiCar /> {translate("home:map.center")}
            </li>
          </ul>
        </div>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.directions}
        >
          <FaDirections /> {translate("home:map.directions")}
        </a>
      </div>
      <div className={classes.frame}>
        <MapCanvas />
      </div>
    </section>
  );
};

export default Map;
