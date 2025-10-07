import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "pokertools",
    siteUrl: "https://sboogway.github.io/pokertools",
  },
  // graphqlTypegen: true,
  plugins: [
    // {
    //   resolve: "gatsby-plugin-google-gtag",
    //   options: {
    //     trackingIds: ["UA-168084704-1"],
    //     pluginConfig: { head: true },
    //   },
    // },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        icon: true,
      },
    },
    "gatsby-plugin-cname",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
  ],
};

export default config;
