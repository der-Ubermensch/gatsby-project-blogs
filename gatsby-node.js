//n=b
const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.
    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
    // console.log(JSON.stringify(node, undefined, 4))
  }

  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    // 1. Get path to template
    const blogPostTemplate = path.resolve(`src/templates/blog.js`)
    // 2. Get Markdown data
    return graphql(`
    query loadPagesQuery ($limit: Int!) {
      allMarkdownRemark(limit: $limit) {
        edges {
          node {
            fields { slug }
          }
        }
      }

      allContentfulBlogPost {
        edges {
          node { slug }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // 3. Create new pages --Markdown
    result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
          // Path for this page — required
          path: `/blog/${edge.node.fields.slug}`,
          component: blogPostTemplate,
          context: { slug: edge.node.fields.slug },
        })
      })
      
    // 3. b Create new pages --Contentful
    result.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
          // Path for this page — required
          path: `/blog/${edge.node.slug}`,
          component: blogPostTemplate,
          context: { slug: edge.node.slug },
        })
      })


    })
  }