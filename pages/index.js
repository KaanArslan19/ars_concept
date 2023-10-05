import Home from "@/components/layouts/Home";
import Head from "next/head";
import fs from "fs/promises";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function HomePage(props) {
  const { t: translate } = useTranslation("meta");

  return (
    <>
      <Head>
        <title>{translate("meta:home.title")}</title>
        <meta name="description" content={translate("meta:home.content")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_ars.ico" />
      </Head>
      <Home listings={props.listings.data} blogs={props.blogs.blogData} />
    </>
  );
}
export async function getStaticProps({ locale }) {
  const filePath = "./data.json";
  const rawData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(rawData);
  const filePathBlog = "./blog.json";
  const rawDataBlog = await fs.readFile(filePathBlog, "utf8");
  const blogData = JSON.parse(rawDataBlog);

  return {
    props: {
      listings: {
        data,
      },
      blogs: {
        blogData,
      },
      ...(await serverSideTranslations(
        locale,
        ["home", "blog", "house", "meta"],
        null,
        ["en", "tr"]
      )),
    },
  };
}
