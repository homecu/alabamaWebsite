require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { kebabCase } = require("lodash");

module.exports = {
  siteMetadata: {
    title: process.env.GATSBY_CU_NAME,
    description: `${process.env.GATSBY_CU_NAME} Website`,
    author: "@blossom",
    siteUrl: process.env.GATSBY_WEBSITE_URL,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-simple-analytics",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `${kebabCase(process.env.GATSBY_CU_NAME)}-cu`,
        short_name: `${process.env.GATSBY_CU_NAME} CU`,
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#9e012e",
        display: "minimal-ui",
        icon: "static/images/favicon.png", // This path is relative to the root of the site.
      },
    },
  ],
};
