import HouseDetails from "@/components/constants/houses/HouseDetails";
import React, { Fragment } from "react";
import fs from "fs/promises";
import PhotoGallery from "@/components/ui/PhotoGallery";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

const HouseDetailPage = (props) => {
  const { t: translate } = useTranslation("meta");

  return (
    <Fragment>
      <Head>
        <title>{translate("meta:listings.title")}</title>
        <meta name="description" content={translate("meta:listings.content")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_ars.ico" />
      </Head>
      <HouseDetails
        id={props.houseData.id}
        title={props.houseData.title}
        coverPhoto={props.houseData.coverPhoto}
      />
      <PhotoGallery photos={props.houseData.photos} />
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
      slug: item.id,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, locale }) {
  const houseId = params.slug;
  const filePath = "./data.json";
  const rawData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(rawData);
  const filteredHouse = data.find((item) => item.id === houseId);

  return {
    props: {
      houseData: {
        id: filteredHouse.id,
        title: filteredHouse.title,
        coverPhoto: filteredHouse.coverPhoto,
        photos: filteredHouse.photos,
      },
      ...(await serverSideTranslations(
        locale,
        ["home", "house", "meta"],
        null,
        ["en", "tr"]
      )),
    },
  };
}
