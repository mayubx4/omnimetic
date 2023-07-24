import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import shape from "../images/shape2.png"
import shapeMobile from "../images/shape2Mobile.png"
import b1 from "../images/blueLine01.png"
import b2 from "../images/blueLine02.png"
import y1 from "../images/yellowLine01.png"
import y2 from "../images/yellowLine02.png"

export default function Linking() {
  const linkingQuery = useStaticQuery(LinkingSectionQuery)
  const data = linkingQuery.allStrapiHomePage.edges[0].node

  return (
    <div className="flex flex-col-reverse xl:flex-row justify-between bg-aliceblue-1 mt-10 xl:mt-100 xl:-mb-60 px-6 xl:px-0">
      <div className="relative">
        <img src={y1} alt="line" className="hidden xl:block absolute -top-80" />
        <img
          src={b1}
          alt="line"
          className="hidden xl:block absolute -top-130 left-5 "
        />
        <img
          src={shape}
          alt="shape"
          className="hidden xl:block relative -top-80 "
        />
        <img
          src={shapeMobile}
          alt="shape"
          className="xl:hidden relative  mx-auto mt-6"
        />
        <video
          className="shadow-3xl bg-white rounded-2xl absolute w-205 xl:w-403 h-312 xl:h-612 xl:top-20 xl:left-32 left-1/2 -ml-102 xl:-ml-0 mt-7 xl:mt-0 top-0"
          autoPlay
          muted
          loop
        >
          <source src={data.LinkingVideo.localFile.url} type="video/mp4" />
        </video>
        <img
          src={b2}
          alt="line"
          className="hidden xl:block absolute bottom-70"
        />
        <img
          src={y2}
          alt="line"
          className="hidden xl:block absolute bottom-28"
        />
      </div>
      <div className="xl:w-624 xl:mr-93 font-Inter ">
        <h2 className="text-16 xl:text-30 font-semibold mt-8 xl:mt-103">
          {data.LinkingSectionHeading}
        </h2>
        <p className="text-14-1 xl:text-20-1 text-indigo-2 font-normal mt-2 xl:mt-23">
          {data.LinkingSectionSubText}
        </p>
        <div className="flex flex-row justify-between text-center xl:text-left xl:flex-col-reverse">
          <div className="flex flex-col-reverse xl:flex-row mt-14 items-center">
            <div className="flex items-center flex-col-reverse xl:flex-row">
              <div className="w-84 xl:w-2 h-2 xl:h-88 bg-yellow-1" />
              <div className="w-14 xl:w-2 h-2 xl:h-59 bg-aliceblue-2 m-1.5" />
            </div>

            <div className="flex items-center flex-col xl:flex-row">
              <img
                src={data.LinkingIcon1.localFile.url}
                alt="logo"
                className=" xl:w-60-1 h-48 xl:h-86 xl:ml-10 xl:mr-16 mb-3 xl:mb-0"
              />
              <div className="xl:w-96">
                <h3 className="text-14-0 xl:text-20-1 font-semibold">
                  {data.LinkingSectionTitle1}
                </h3>
                <p className="text-12 xl:text-20-1 text-indigo-2 font-normal">
                  {data.LinkingSectionSubTitle1}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse xl:flex-row mt-14 items-center">
            <div className="flex items-center flex-col-reverse xl:flex-row">
              <div className="w-84 xl:w-2 h-2 xl:h-88 bg-yellow-1" />
              <div className="w-14 xl:w-2 h-2 xl:h-59 bg-aliceblue-2 m-1.5" />
            </div>

            <div className="flex items-center flex-col xl:flex-row">
              <img
                src={data.LinkingIcon2.localFile.url}
                alt="logo"
                className=" xl:w-59 h-48 xl:h-70 xl:ml-10 xl:mr-16 mb-3 xl:mb-0"
              />
              <div className="xl:w-96">
                <h3 className="text-14-0 xl:text-20-1 font-semibold">
                  {data.LinkingSectionTitle2}
                </h3>
                <p className="text-12 xl:text-20-1 text-indigo-2 font-normal">
                  {data.LinkingSectionSubTitle2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const LinkingSectionQuery = graphql`
  query {
    allStrapiHomePage {
      edges {
        node {
          LinkingSectionHeading
          LinkingSectionSubText
          LinkingSectionTitle1
          LinkingSectionSubTitle1
          LinkingSectionTitle2
          LinkingSectionSubTitle2
          LinkingIcon1 {
            localFile {
              url
            }
          }
          LinkingIcon2 {
            localFile {
              url
            }
          }
          LinkingVideo {
            localFile {
              url
            }
          }
        }
      }
    }
  }
`
