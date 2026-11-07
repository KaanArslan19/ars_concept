/** @type {import('next').NextConfig} */
const path = require("path");
const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
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
