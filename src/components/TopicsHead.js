import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Navigation } from "swiper/core"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"
import { BsArrowLeft } from "@react-icons/all-files/bs/BsArrowLeft"
SwiperCore.use([Navigation])

export default function TopicsHead() {
  const featuredBlogQuery = useStaticQuery(featureBlogQuery)
  const queryData = featuredBlogQuery.allStrapiArticles.edges
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    counter !== data.length - 1 ? setCounter(counter + 1) : console.log(counter)
  }
  const decrementCounter = () => {
    counter !== 0 ? setCounter(counter - 1) : console.log(counter)
  }

  const featuredBlog = () => {
    let featureData = queryData.filter(
      blog => blog.node.featureBlog && blog.node
    )
    return featureData
  }

  let data = featuredBlog()

  return (
    <Swiper
      className="mySwiper"
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      {data.map(d => (
        <SwiperSlide>
          <div className="w-auto max-w-lg xl:max-w-max xl:w-1178 xl:h-500  xl:min-h-full mt-24 mb-28 xl:mb-136 mx-9 sm:mx-auto shadow-3xl flex flex-col xl:flex-row rounded-2xl z-0 bg-white">
            <img
              src={d.node.mediaImage.localFile.url}
              alt=""
              className="w-full xl:w-500 h-303 xl:h-500 rounded-2xl object-cover"
            />
            <div className="z-0 bg-white w-full rounded-2xl shadow-3xl-1 xl:shadow-none">
              <div className="xl:w-583 mx-auto  rounded-2xl px-4 flex flex-col bg-white font-Inter h-470 xs:h-388 xl:h-full">
                <h6 className="text-16-1 xl:text-20-1 font-medium text-indigo-1 mt-5 mb-2">
                  {d.node.tag.Name}
                </h6>
                <h1 className="text-27-0 xl:text-36 font-semibold mb-2">
                  {d.node.title}
                </h1>
                <div className="flex items-center mb-3">
                  <a
                    href={encodeURI(d.node.author.socialMediaLink)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={d.node.author.Avatar.localFile.url}
                      alt=""
                      className="w-7 xl:w-12 h-7 xl:h-12 rounded-full object-cover"
                    />
                  </a>
                  <h6 className="text-16-1 xl:text-20-1 font-medium ml-4">
                    {d.node.author.Name}
                  </h6>
                </div>
                <p className="text-14-1 xl:text-20-1 font-normal text-indigo-2">
                  {d.node.excerpt}
                </p>
                <a
                  className="group flex items-center focus:outline-none text-14 text-left xl:text-18-1 font-medium text-indigo-1 w-max my-4"
                  href={`/${d.node.slug}/`}
                >
                  Read More
                  <span className="xl:-mr-1 opacity-0 group-hover:opacity-100 transform text-yellow-1 xl:mt-1">
                    <svg
                      viewBox="0 0 10 10"
                      aria-hidden="true"
                      className="stroke-2 ml-1 w-3 xl:w-4"
                    >
                      <g fillRule="evenodd">
                        <path
                          d="M0 5h7"
                          className="stroke-2 stroke-current transform duration-150"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="-ml-4 group-hover:-ml-3 transform duration-150 text-yellow-1 xl:mt-1">
                    <svg
                      viewBox="0 0 10 10"
                      aria-hidden="true"
                      className="stroke-2  ml-1 w-3 xl:w-4"
                    >
                      <g fillRule="evenodd">
                        <path
                          d="M1 1l4 4-4 4"
                          className="stroke-current fill-none"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="flex justify-between absolute bottom-32 xl:bottom-40 z-40 right-1/4 md:right-1/3 xl:left-3/4 w-16 xl:w-20">
        <BsArrowLeft
          className={
            "swiper-button-prev text-27 xl:text-30 " +
            (counter === 0 ? "opacity-50" : "")
          }
          onClick={decrementCounter}
        />
        <BsArrowRight
          className={
            "swiper-button-next text-27 xl:text-30 " +
            (counter === data.length - 1 ? "opacity-50" : "")
          }
          onClick={incrementCounter}
        />
      </div>
    </Swiper>
  )
}

const featureBlogQuery = graphql`
  query {
    allStrapiArticles {
      edges {
        node {
          slug
          title
          excerpt
          content
          featureBlog
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
`
