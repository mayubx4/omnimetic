import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TopicTemplate from "../components/TopicTemplate"
import SingleTopicHeader from "../components/SingleTopicHeader"
import SingleTopicBody from "../components/SingleTopicBody"

export default function BlogDetails({
  topic,
  title,
  excerpt,
  img,
  author,
  content,
  slug,
  authorImg,
  socialMediaLinkAuthor,
  otherArticles,
}) {
  const rand1 = Math.floor(Math.random() * otherArticles.length)
  const generateRandom = () => {
    var num = Math.floor(Math.random() * otherArticles.length)
    return num === rand1 ? (rand1 === 0 ? ++num : --num) : num
  }
  const rand2 = generateRandom()

  return (
    <div className="xl:w-desktop w-auto xl:mx-auto overflow-hidden">
      <Header />
      <SingleTopicHeader
        topic={topic}
        title={title}
        excerpt={excerpt}
        img={img}
        author={author}
        authorImage={authorImg}
        socialMediaLinkAuthor={socialMediaLinkAuthor}
      />
      <SingleTopicBody content={content} slug={slug} />
      {otherArticles.length > 0 ? (
        <div className="bg-aliceblue-1">
          <h2 className="text-24 xl:text-46 text-center pt-16 xl:pt-36 pb-1 font-Inter">
            More To Explore
          </h2>
          <div className="w-36 xl:w-351 h-1 bg-black mx-auto"></div>
        </div>
      ) : (
        <></>
      )}
      {otherArticles.length > 2
        ? otherArticles.map(
            (el, i) =>
              (i === rand1 || i === rand2) && (
                <TopicTemplate
                  topic={el.node.tag.Name}
                  title={el.node.title}
                  excerpt={el.node.excerpt}
                  img={el.node.mediaImage.localFile.url}
                  author={el.node.author.Name}
                  slug={el.node.slug}
                  authorImg={el.node.author.Avatar.localFile.url}
                  socialMediaLinkAuthor={el.node.author.socialMediaLink}
                />
              )
          )
        : otherArticles.map(el => (
            <TopicTemplate
              topic={el.node.tag.Name}
              title={el.node.title}
              excerpt={el.node.excerpt}
              img={el.node.mediaImage.localFile.url}
              author={el.node.author.Name}
              slug={el.node.slug}
              authorImg={el.node.author.Avatar.localFile.url}
              socialMediaLinkAuthor={el.node.author.socialMediaLink}
            />
          ))}
      <Footer />
    </div>
  )
}
