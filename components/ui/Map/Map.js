import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Browser, divIcon } from "leaflet";
import { ADDRESS, DIRECTIONS_URL, LOCATION } from "./location";
import classes from "./Map.module.scss";

const PIN = divIcon({
  className: classes.pin,
  html: `<span><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 3 2 12h3v8h5v-6h4v6h5v-8h3z"/></svg></span>`,
  iconSize: [44, 44],
  iconAnchor: [22, 22],
  popupAnchor: [0, -24],
});

const Map = () => (
  <MapContainer
    center={LOCATION}
    zoom={14}
    scrollWheelZoom={false}
    dragging={!Browser.mobile}
    className={classes.map}
  >
    <TileLayer
      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      maxZoom={19}
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={LOCATION} icon={PIN}>
      <Popup className={classes.popup}>
        <strong>Ars Concept Houses</strong>
        <span>{ADDRESS}</span>
        <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
          Google Maps →
        </a>
      </Popup>
    </Marker>
  </MapContainer>
);

export default Map;
