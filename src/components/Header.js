import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import shape from "../images/shape1.png"
import shapeMobile from "../images/shapeMobile.png"
import b1 from "../images/blueLine1.png"
import b2 from "../images/blueLine2.png"
import y1 from "../images/yellowLine1.png"
import y2 from "../images/yellowLine2.png"
import hamburger from "../images/hamburger.png"
import close from "../images/close.png"

export default function Header() {
  const headerQuery = useStaticQuery(HeaderQuery)
  const data = headerQuery.allStrapiHomePage.edges[0].node
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen)
  }

  const closeDrawer = () => {
    setOpen(false)
  }

  const onClickHome = () => {
    window.location.reload()
    window.location.href = "/"
  }

  const onClickResources = () => {
    window.location.reload()
    window.location.href = "/resources/"
  }

  const onClickDemo = () => {
    window.location.reload()
    window.location.href = "/schedule-demo/"
  }

  return (
    <div className="relative flex justify-between items-center">
      <img
        src={y1}
        alt="line"
        className="hidden xl:block absolute top-0 left-565"
      />
      <img
        src={b1}
        alt="line"
        className="hidden xl:block absolute top-12 left-617"
      />
      <img
        src={shape}
        alt="shape"
        className="hidden xl:block absolute top-0 right-0"
      />
      <img
        src={shapeMobile}
        alt="shape"
        className={
          " xl:hidden w-450 max-w-screen-sm z-20 absolute top-0 transition-all duration-1000 " +
          (isOpen ? "right-0 " : "-right-295")
        }
      />
      <img
        src={b2}
        alt="line"
        className="hidden xl:block absolute top-575 right-0"
      />
      <img
        src={y2}
        alt="line"
        className="hidden xl:block absolute top-635 right-11"
      />
      <button
        className={
          "xl:hidden absolute z-30 top-20 font-Inter text-white text-18 transition-all duration-1000 " +
          (isOpen ? "right-64" : "-right-295")
        }
        onClick={onClickHome}
        onChange={closeDrawer}
      >
        {data.MenuButton1}
      </button>
      <button
        className={
          "xl:hidden absolute z-30 top-32 font-Inter text-white text-18 transition-all duration-1000 " +
          (isOpen ? "right-48" : "-right-295")
        }
        onClick={onClickResources}
        onChange={closeDrawer}
      >
        {data.MenuButton2}
      </button>
      <button
        className={
          "xl:hidden absolute z-30 top-44 font-Inter text-white text-18 transition-all duration-1000 " +
          (isOpen ? "right-28" : "-right-295")
        }
        onClick={onClickDemo}
        onChange={closeDrawer}
      >
        {data.MenuButton3}
      </button>
      <button
        className={
          "fixed h-full w-full top-0 bottom-0 z-10 transition-all duration-1000 bg-black opacity-50 " +
          (isOpen ? "right-0" : "-right-full")
        }
        onClick={closeDrawer}
      >
        &nbsp;
      </button>
      <div className="flex justify-between items-center w-full">
        <img
          src={data.Logo.localFile.url}
          alt="logo"
          className="w-164 h-7 xl:h-auto xl:w-auto mt-12 xl:mt-5 ml-6 xl:ml-89 cursor-pointer"
          aria-hidden="true"
          onClick={onClickHome}
        />
        <div className="hidden xl:flex z-0 font-Inter text-20 text-white mt-5">
          <button
            className="focus:outline-none h-47 w-auto px-2 font-medium"
            onClick={onClickHome}
          >
            {data.MenuButton1}
          </button>
          <button
            className="focus:outline-none h-47 w-auto px-2 mx-11 font-medium"
            onClick={onClickResources}
          >
            {data.MenuButton2}
          </button>
          <button
            className="transition duration-500 ease-in focus:outline-none h-47 w-229 font-medium border border-white mr-89 hover:bg-white hover:text-indigo-1 hover:border-indigo-1"
            onClick={onClickDemo}
          >
            {data.MenuButton3}
          </button>
        </div>
        <button
          className="xl:hidden focus:outline-none block mt-12 z-20 w-18 h-11-1 mr-7"
          onClick={handleClick}
        >
          <img
            src={isOpen ? close : hamburger}
            alt="hamburger"
            className="transform"
          />
        </button>
      </div>
    </div>
  )
}

const HeaderQuery = graphql`
  query {
    allStrapiHomePage {
      edges {
        node {
          MenuButton1
          MenuButton2
          MenuButton3
          Logo {
            localFile {
              url
            }
          }
        }
      }
    }
  }
`
