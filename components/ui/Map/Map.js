import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMediaQuery } from "react-responsive";
import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "/images/hotel-marker-icon.png",
  iconSize: [30, 40],
});
const Map = () => {
  return (
    <MapContainer
      center={[38.063472, 27.028338]}
      zoom={14}
      scrollWheelZoom={false}
      style={{
        width: "100%",
        height: "300px",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[38.063472, 27.028338]} icon={ICON}>
        <Popup>
          <h5>Ars Concept Houses</h5>
          <span>
            Address: İnönü Mahallesi, Teyfik Yılmaz Caddesi no:70
            Gümüldür/Menderes
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
