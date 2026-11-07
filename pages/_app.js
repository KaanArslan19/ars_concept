import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";

const theme = extendTheme({
  fonts: {
    heading: `"Poppins", sans-serif`,
    body: `"Poppins", sans-serif`,
  },
  styles: {
    global: {
      body: {
        fontSize: "var(--fs-base)",
        lineHeight: 1.6,
        color: "var(--color-text)",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: { fontWeight: 600, lineHeight: 1.2 },
      sizes: {
        "4xl": { fontSize: "var(--fs-3xl)" },
        "3xl": { fontSize: "var(--fs-3xl)" },
        "2xl": { fontSize: "var(--fs-3xl)" },
        xl: { fontSize: "var(--fs-2xl)" },
        lg: { fontSize: "var(--fs-xl)" },
        md: { fontSize: "var(--fs-lg)" },
        sm: { fontSize: "var(--fs-base)" },
      },
      defaultProps: { size: "xl" },
    },
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default appWithTranslation(App);
