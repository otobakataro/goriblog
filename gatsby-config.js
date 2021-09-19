require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "goriblog",
  },
  plugins: [
    {
      resolve: `gatsby-source-custom-api`,
      options: {
        apiKey: process.env.API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`)
        }
      },
    },
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: "@theme-ui/preset-funck",
      },
    }
  ],
};
