import HouseDetails from "@/components/constants/houses/HouseDetails";
import React, { Fragment } from "react";
import PhotoGallery from "@/components/ui/PhotoGallery";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import getAllHouseIds from "@/lib/getAllHouseIds";
import { client } from "@/client";

const HouseDetailPage = (props) => {
  const { t: translate } = useTranslation("meta");

  return (
    <Fragment>
      <Head>
        <meta property="og:image" content="/images/ars_concept_logo.png" />
        <meta property="og:image:width" content="200px" />
        <meta property="og:image:height" content="200px" />
        <meta property="og:image:alt" content={translate("meta:home.title")} />
        <link
          rel="canonical"
          href={`https://www.arsconcepthouses.com/listings/${props.houseData.id}`}
        />
        <title>{translate(`meta:listings.${props.houseData.id}.title`)}</title>
        <meta
          name="description"
          content={translate(`meta:listings.${props.houseData.id}.content`)}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_ars.ico" />
      </Head>
      <HouseDetails
        id={props.houseData.id}
        title={props.houseData.title}
        thumbnail={props.houseData.thumbnail}
        lazyThumbnail={props.houseData.lazyThumbnail}
      />

      <PhotoGallery photos={props.houseData.photos} />
    </Fragment>
  );
};

export default HouseDetailPage;

export async function getStaticPaths({ locales }) {
  const houseIds = await getAllHouseIds();
  const paths = [];

  for (const locale of locales) {
    paths.push(
      ...houseIds.map((id) => ({
        params: { slug: id },
        locale,
      }))
    );
  }

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params;
  const recordQuery = `*[_type == "records" && _id == $slug][0]`;
  const recordsData = await client.fetch(recordQuery, { slug });

  if (!recordsData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      houseData: {
        id: recordsData._id,
        title: recordsData.title,
        thumbnail: recordsData.thumbnail,
        photos: recordsData.images,
        lazyThumbnail: recordsData.lazyThumbnail,
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
