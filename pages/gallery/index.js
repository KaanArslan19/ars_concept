import Gallery from "@/components/constants/Gallery";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function GalleryPage() {
  const { t: translate } = useTranslation("meta");

  return (
    <>
      <Head>
        <title>{translate("meta:gallery.title")}</title>
        <meta name="description" content={translate("meta:gallery.content")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_ars.ico" />
      </Head>
      <Gallery />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["home", "gallery", "meta"],
        null,
        ["en", "tr"]
      )),
    },
  };
}
