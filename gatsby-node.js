const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');

        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/blog.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

    // Create blog post pages.
    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            // Path for this page — required
            path: `/blog/${edge.node.slug}`,
            component: blogTemplate,
            context: {
                slug: edge.node.slug
            },
        })
    })
}