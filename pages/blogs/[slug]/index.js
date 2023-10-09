import BlogDetails from "@/components/constants/blogs/BlogDetails";
import fs from "fs/promises";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

const BlogDetailPage = (props) => {
  const { t: translate } = useTranslation("meta");

  return (
    <div>
      <Head>
        <title>{translate("meta:blogDetails.title")}</title>
        <meta
          name="description"
          content={translate("meta:blogDetails.content")}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_ars.ico" />
      </Head>
      <BlogDetails
        id={props.houseData.id}
        title={props.houseData.title}
        imgUrl={props.houseData.imgUrl}
      />
    </div>
  );
};

export default BlogDetailPage;

export async function getStaticPaths({ locales }) {
  const filePath = "./blog.json";
  const rawData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(rawData);
  let paths = [];
  data.forEach((item) => {
    for (const locale of locales) {
      paths.push({
        params: {
          slug: item.id,
        },
        locale,
      });
    }
  });
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, locale }) {
  const blogId = params.slug;
  const filePath = "./blog.json";
  const rawData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(rawData);
  const filteredBlog = data.find((item) => item.id === blogId);

  return {
    props: {
      houseData: {
        id: filteredBlog.id,
        title: filteredBlog.title,
        imgUrl: filteredBlog.imgUrl,
      },
      ...(await serverSideTranslations(locale, ["home", "blog", "meta"], null, [
        "en",
        "tr",
      ])),
    },
  };
}
