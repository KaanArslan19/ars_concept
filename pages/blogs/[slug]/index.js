import BlogDetails from "@/components/constants/blogs/BlogDetails";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import getAllBlogIds from "@/lib/getAllBlogIds";
import { client } from "@/client";

const BlogDetailPage = (props) => {
  const { t: translate } = useTranslation("meta");

  return (
    <div>
      <Head>
        <meta property="og:image" content="/images/ars_concept_logo.png" />
        <meta property="og:image:width" content="200px" />
        <meta property="og:image:height" content="200px" />
        <meta property="og:image:alt" content={translate("meta:home.title")} />
        <title>
          {translate(`meta:blogDetails.${props.blogData.id}.title`)}
        </title>
        <link
          rel="canonical"
          href={`https://www.arsconcepthouses.com/blogs/${props.blogData.id}`}
        />
        <meta
          name="description"
          content={translate(`meta:blogDetails.${props.blogData.id}.content`)}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_ars.ico" />
      </Head>
      <BlogDetails
        id={props.blogData.id}
        title={props.blogData.title}
        imgUrl={props.blogData.imgUrl}
      />
    </div>
  );
};

export default BlogDetailPage;

export async function getStaticPaths({ locales }) {
  const blogIds = await getAllBlogIds();
  const paths = [];

  for (const locale of locales) {
    paths.push(
      ...blogIds.map((id) => ({
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
  const blogsQuery = `*[_type == "blogs" && _id == $slug][0]`;
  const blogsData = await client.fetch(blogsQuery, { slug });

  return {
    props: {
      blogData: {
        id: blogsData._id,
        title: blogsData.title,
        imgUrl: blogsData.thumbnail,
      },
      ...(await serverSideTranslations(locale, ["home", "blog", "meta"], null, [
        "en",
        "tr",
      ])),
    },
  };
}
