import Home from "@/components/layouts/Home";
import Head from "next/head";
import fs from "fs/promises";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
      ...(await serverSideTranslations(locale, ["home", "blog"], null, [
        "en",
        "tr",
      ])),
    },
  };
}
