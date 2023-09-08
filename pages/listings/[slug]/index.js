import HouseDetails from "@/components/constants/houses/HouseDetails";
import React, { Fragment } from "react";
import fs from "fs/promises";
import PhotoGallery from "@/components/ui/PhotoGallery";
import Footer from "@/components/constants/Footer";
import FAQ from "@/components/ui/FAQ";

const HouseDetailPage = (props) => {
  return (
    <Fragment>
      <HouseDetails
        id={props.houseData.id}
        title={props.houseData.title}
        description={props.houseData.description}
        type={props.houseData.type}
        totalArea={props.houseData.totalArea}
        coverPhoto={props.houseData.coverPhoto}
        price={props.houseData.price}
        airbnbId={props.houseData.airbnbId}
      />
      <PhotoGallery photos={props.houseData.photos} />
      <FAQ />
      <Footer />
    </Fragment>
  );
};

export default HouseDetailPage;

export async function getStaticPaths() {
  const filePath = "./data.json";
  const rawData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(rawData);
  const paths = data.map((item) => ({
    params: {
      slug: item.title,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const houseTitle = params.slug;
  const filePath = "./data.json";
  const rawData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(rawData);
  const filteredHouse = data.find((item) => item.title === houseTitle);

  return {
    props: {
      houseData: {
        id: filteredHouse.id,
        title: filteredHouse.title,
        description: filteredHouse.description,
        type: filteredHouse.type,
        totalArea: filteredHouse.totalArea,
        coverPhoto: filteredHouse.coverPhoto,
        price: filteredHouse.price,
        photos: filteredHouse.photos,
        airbnbId: filteredHouse.airbnbId,
      },
    },
  };
}
