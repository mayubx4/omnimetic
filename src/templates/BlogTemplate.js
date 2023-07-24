import React from "react"
import BlogDetails from "./BlogDetail"
import { Helmet } from "react-helmet"

export default function BlogTemplate({ pageContext }) {
  const blog = pageContext

  const filterDataBy = by => {
    let filterData = blog.otherArticles.filter(
      el => el.node.tag.Name === by && el.node.slug !== blog.slug
    )
    return filterData
  }

  return (
    <>
      <Helmet>
        <title>{blog.title}</title>
      </Helmet>
      <BlogDetails
        title={blog.title}
        excerpt={blog.excerpt}
        topic={blog.topic}
        img={blog.mediaImage.localFile.url}
        author={blog.author}
        content={blog.content}
        slug={blog.slug}
        authorImg={blog.authorImage}
        socialMediaLinkAuthor={blog.socialMediaLinkAuthor}
        otherArticles={filterDataBy(blog.topic)}
      />
    </>
  )
}
