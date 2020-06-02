/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions: { createPage } }) => {
  const buildTime = Date.now()
  createPage({
    path: `/`,
    component: require.resolve('./src/time.js'),
    context: { buildTime }
  });
}