module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {}
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`
      }
    }
  ]
}