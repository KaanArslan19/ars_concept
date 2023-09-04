import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMediaQuery } from "react-responsive";
import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 40],
});
const Map = () => {
  return (
    <MapContainer
      center={[38.06204, 27.026746]}
      zoom={17}
      scrollWheelZoom={false}
      style={{
        width: "100%",
        height: "175px",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[38.06204, 27.026746]} icon={ICON}>
        <Popup>
          <h5>Ars Concept Houses</h5>
          <span>Address: </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
