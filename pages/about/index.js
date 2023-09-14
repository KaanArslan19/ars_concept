import About from "@/components/constants/About";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "about"], null, [
        "en",
        "tr",
      ])),
    },
  };
}
