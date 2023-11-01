import Contact from "@/components/constants/Contact";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function AboutPage() {
  const { t: translate } = useTranslation("meta");

  return (
    <>
      <Head>
        <meta property="og:image" content="/images/ars_concept_logo.png" />
        <meta property="og:image:width" content="200px" />
        <meta property="og:image:height" content="200px" />
        <meta property="og:image:alt" content={translate("meta:home.title")} />
        <link rel="canonical" href="https://www.arsconcepthouses.com/contact" />
        <title>{translate("meta:contact.title")}</title>
        <meta name="description" content={translate("meta:contact.content")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_ars.ico" />
      </Head>
      <Contact />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "contact"], null, [
        "en",
        "tr",
      ])),
    },
  };
}
