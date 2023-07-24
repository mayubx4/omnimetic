import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function HomeHero() {
  const homeHeroQuery = useStaticQuery(HomeHeroQuery)
  const data = homeHeroQuery.allStrapiHomePage.edges[0].node

  const onClickDemo = () => {
    window.location.reload()
    window.location.href = "/schedule-demo/"
  }

  return (
    <div className="xl:mt-27 xl:ml-99 px-6 xl:px-0 flex justify-between">
      <div className="mt-16 xl:mt-100">
        <button className="group flex items-center focus:outline-none font-Inter text-14-1 xl:text-20-1 text-indigo-1">
          {data.HomeHeroLinkText}
          <span className="xl:-mr-1 opacity-0 group-hover:opacity-100 transform text-yellow-1">
            <svg
              viewBox="0 0 10 10"
              aria-hidden="true"
              className="stroke-2  ml-1 w-3 xl:w-4"
            >
              <g fillRule="evenodd">
                <path
                  d="M0 5h7"
                  className="stroke-2 stroke-current transform duration-150"
                ></path>
              </g>
            </svg>
          </span>
          <span className="-ml-4 group-hover:-ml-3 transform duration-150 text-yellow-1">
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
        </button>
        <h1 className="font-semibold font-Montserrat text-32 xl:text-48 xl:w-553 xl:h-133 xl:mt-18">
          {data.HomeHeroTextHeading}
        </h1>
        <p className="text-14 xl:text-20-1 font-Inter font-normal mt-3 xl:mt-0 xl:w-529 text-indigo-2">
          {data.HomeHeroSubText}
        </p>
        <div className="text-center xl:text-left">
          <button
            className="focus:outline-none mx-auto xl:mx-0 h-11 xl:h-55 w-198 xl:w-249 font-Inter font-medium text-16 xl:text-20 text-white bg-indigo-1 mt-12 xl:mt-14 rounded-sm"
            onClick={onClickDemo}
          >
            {data.HomeHeroButton}
          </button>
        </div>
      </div>
      <img
        src={data.HomeHeroImage.localFile.url}
        alt="table"
        className="hidden xl:block z-0 p-35 overflow-hidden"
      />
    </div>
  )
}

const HomeHeroQuery = graphql`
  query {
    allStrapiHomePage {
      edges {
        node {
          HomeHeroButton
          HomeHeroLinkText
          HomeHeroTextHeading
          HomeHeroSubText
          HomeHeroImage {
            localFile {
              url
            }
          }
        }
      }
    }
  }
`
