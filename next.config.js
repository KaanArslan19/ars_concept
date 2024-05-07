/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const { i18n } = require("./next-i18next.config");

module.exports = nextConfig;

const path = require("path");
module.exports = {
  async redirects() {
    return [
      {
        source: "/:locale(en|tr)",
        destination: "/:locale",
        permanent: true,
      },
    ];
  },
};

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  i18n,
  env: {
    NEXT_SANITY_PROJECT_ID: process.env.NEXT_SANITY_PROJECT_ID,
    NEXT_SANITY_TOKEN: process.env.NEXT_SANITY_TOKEN,
  },
};
