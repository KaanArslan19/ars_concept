import Head from "next/head";
import { Fragment } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Error from "@/components/constants/Error";
const Page404 = () => {
  const { t: translate } = useTranslation("meta");

  return (
    <Fragment>
      <Head>
        <meta property="og:image" content="/images/ars_concept_logo.png" />
        <meta property="og:image:width" content="200px" />
        <meta property="og:image:height" content="200px" />
        <meta property="og:image:alt" content={translate("meta:home.title")} />
        <link rel="canonical" href="https://www.arsconcepthouses.com/contact" />
        <title>{translate("meta:error.title")}</title>
        <meta name="description" content={translate("meta:error.content")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_ars.ico" />
      </Head>
      <Error />
    </Fragment>
  );
};

export default Page404;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "meta"], null, [
        "en",
        "tr",
      ])),
    },
  };
}
