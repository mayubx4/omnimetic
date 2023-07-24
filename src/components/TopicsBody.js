import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import TopicTemplate from "./TopicTemplate"
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown"

export default function TopicsBody() {
  const blogs = useStaticQuery(BlogsQuery)
  const [data, setData] = useState(blogs.allStrapiArticles.edges)
  const tagData = blogs.allStrapiTags.edges
  const [isOpen, setOpen] = useState(false)
  const [option, setOption] = useState("Topics")
  const [viewMore, setViewMore] = useState(data.length > 2 ? 3 : data.length)

  const handleClick = () => {
    setOpen(!isOpen)
  }
  const closeOptions = () => {
    setOpen(false)
  }
  const selectOption = option => {
    setOpen(false)
    setOption(option)
    option === "All"
      ? setData(blogs.allStrapiArticles.edges)
      : setData(
          blogs.allStrapiArticles.edges.filter(
            el => el.node.tag.Name === option
          )
        )
  }
  const handleView = () => {
    viewMore + 3 <= data.length
      ? setViewMore(viewMore + 3)
      : setViewMore(data.length)
  }

  useEffect(() => {
    setViewMore(data.length > 2 ? 3 : data.length)
  }, [data])

  return (
    <>
      <div className="bg-aliceblue-1 pt-540 xl:pt-11 -mt-540 xl:-mt-0 ">
        <div className="">
          <div className="max-w-lg xl:max-w-max px-7 xl:px-24">
            <button
              onClick={closeOptions}
              className={
                "fixed w-full h-full inset-0  z-0 " +
                (isOpen ? "block" : "hidden")
              }
            >
              &nbsp;
            </button>
            <div className="h-20 w-133 xl:w-44 relative font-Inter">
              <button
                onClick={handleClick}
                className="w-full flex justify-between items-center text-14 xl:text-20-1 text-left pX-2 "
              >
                {option}
                <span /* className="block float-right w-1.5 xl:w-auto mt-2.5 xl:mt-4" */
                >
                  <MdKeyboardArrowDown />
                </span>
              </button>
              <div className="w-full h-0.5 mt-1 bg-black" />
              <div
                className={
                  "flex flex-col shadow-xl text-14 xl:text-20-1 bg-white mt-2 py-3 w-full absolute " +
                  (isOpen ? "block" : "hidden")
                }
              >
                <button
                  onClick={() => selectOption("All")}
                  className="p-2 text-left hover:bg-indigo-1 hover:text-white"
                >
                  All
                </button>
                {tagData.map((el, i) => (
                  <button
                    key={i}
                    className="p-2 text-left hover:bg-indigo-1 hover:text-white"
                    onClick={() => selectOption(el.node.Name)}
                  >
                    {el.node.Name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {data.slice(0, viewMore).map(el => {
            if (
              option === "All" ||
              option === "Topics" ||
              el.node.tag.Name === option
            ) {
              return (
                <TopicTemplate
                  key={el.node.slug}
                  topic={el.node.tag.Name}
                  title={el.node.title}
                  excerpt={el.node.excerpt}
                  img={el.node.mediaImage.localFile.url}
                  author={el.node.author.Name}
                  slug={el.node.slug}
                  authorImg={el.node.author.Avatar.localFile.url}
                  socialMediaLinkAuthor={encodeURI(
                    el.node.author.socialMediaLink
                  )}
                />
              )
            }
            return null
          })}
        </div>
        <button
          className={
            "font-medium font-Inter text-16 xl:text-20 text-indigo-1 text-center py-5 mx-auto focus:outline-none " +
            (viewMore === data.length || viewMore === 0 ? "hidden" : "block")
          }
          onClick={handleView}
        >
          View More
        </button>
      </div>
    </>
  )
}

const BlogsQuery = graphql`
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
    allStrapiTags {
      edges {
        node {
          Name
        }
      }
    }
  }
`
