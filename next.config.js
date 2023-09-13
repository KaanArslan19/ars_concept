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
  i18n,
};
