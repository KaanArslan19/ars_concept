import Gallery from "@/components/constants/Gallery";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { client } from "@/client";

export default function GalleryPage(props) {
  const { t: translate } = useTranslation("meta");

  return (
    <>
      <Head>
        <meta property="og:image" content="/images/ars_concept_logo.png" />
        <meta property="og:image:width" content="200px" />
        <meta property="og:image:height" content="200px" />
        <meta property="og:image:alt" content={translate("meta:home.title")} />
        <link rel="canonical" href="https://www.arsconcepthouses.com/gallery" />
        <title>{translate("meta:gallery.title")}</title>
        <meta name="description" content={translate("meta:gallery.content")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_ars.ico" />
      </Head>
      <Gallery
        generalView={props.gallery.generalView}
        rooms={props.gallery.rooms}
        events={props.gallery.events}
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const galleryQuery = '*[_type == "gallery"]';
  const galleryData = await client.fetch(galleryQuery);
  const generalViewData = galleryData.map((item) => item.generalView);
  const roomsData = galleryData.map((item) => item.rooms);
  const eventsData = galleryData.map((item) => item.events);

  return {
    props: {
      gallery: {
        generalView: generalViewData,
        rooms: roomsData,
        events: eventsData,
      },
      ...(await serverSideTranslations(
        locale,
        ["home", "gallery", "meta"],
        null,
        ["en", "tr"]
      )),
    },
  };
}
