import Home from "@/components/layouts/Home";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { client } from "@/client";

export default function HomePage({ listings, blogs }) {
  const { t: translate } = useTranslation("meta");
  return (
    <>
      <Head>
        <meta property="og:image" content="/images/ars_concept_logo.png" />
        <meta property="og:image:width" content="200px" />
        <meta property="og:image:height" content="200px" />
        <meta property="og:image:alt" content={translate("meta:home.title")} />
        <link rel="canonical" href="https://www.arsconcepthouses.com" />
        <title>{translate("meta:home.title")}</title>
        <meta name="description" content={translate("meta:home.content")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_ars.ico" />
      </Head>
      <Home listings={listings} blogs={blogs} />
    </>
  );
}
export async function getStaticProps({ locale }) {
  const listingsQuery = '*[_type == "records"]';
  const blogsQuery = '*[_type == "blogs"]';

  const [listingsData, blogsData] = await Promise.all([
    client.fetch(listingsQuery),
    client.fetch(blogsQuery),
  ]);
  return {
    props: {
      listings: listingsData,
      blogs: blogsData,
      ...(await serverSideTranslations(
        locale,
        ["home", "blog", "house", "meta"],
        null,
        ["en", "tr"]
      )),
    },
  };
}
