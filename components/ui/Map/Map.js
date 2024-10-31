import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { FaDirections } from "react-icons/fa";
import { useTranslation } from "next-i18next";

const ICON = icon({
  iconUrl: "/images/hotel-marker-icon.webp",
  iconSize: [30, 40],
});
const Map = () => {
  const { t: translate } = useTranslation("home");

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
      <Link href="https://goo.gl/maps/srsMMo7GNB2Qvmjp8" target="_blank">
        <Button
          position="absolute"
          zIndex="1000"
          right="0"
          mt="2rem"
          mr="2rem"
          leftIcon={<FaDirections />}
          fontSize={{ base: "12px", md: "16px", xl: "20" }}
        >
          {translate("home:map.direction")}
        </Button>
      </Link>
    </MapContainer>
  );
};

export default Map;
