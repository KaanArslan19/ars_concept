import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default appWithTranslation(App);
