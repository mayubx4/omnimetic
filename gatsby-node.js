exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allStrapiArticles {
        edges {
          node {
            slug
            title
            excerpt
            content
            mediaImage {
              localFile {
                url
              }
            }
            author {
              Name
              socialMediaLink
              Avatar {
                localFile {
                  url
                }
              }
            }
            tag {
              Name
            }
          }
        }
      }
    }
  `)

  const path = require("path")
  const blogs = result.data.allStrapiArticles.edges

  blogs.forEach(blog => {
    createPage({
      path: `/${blog.node.slug}/`,
      component: path.resolve(`./src/templates/BlogTemplate.js`),
      context: {
        slug: blog.node.slug,
        title: blog.node.title,
        excerpt: blog.node.excerpt,
        content: blog.node.content,
        author: blog.node.author.Name,
        topic: blog.node.tag.Name,
        mediaImage: blog.node.mediaImage,
        authorImage: blog.node.author.Avatar.localFile.url,
        socialMediaLinkAuthor: blog.node.author.socialMediaLink,
        otherArticles: blogs,
      },
    })
  })
}
