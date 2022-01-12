const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

//
//  Create static pages
//
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const { data, errors } = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        nodes {
          frontmatter {
            path
            type
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const templates = {
    page: path.resolve(`src/templates/page.js`),
    post: path.resolve(`src/templates/post.js`),
  }

  data.allMarkdownRemark.nodes.forEach(i => {
    createPage({
      path: i.frontmatter.path,
      component: templates[i.frontmatter.type],
      context: {},
    })
  })
}
