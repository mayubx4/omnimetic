import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import axios from "axios"

export default function Footer() {
  const footerQuery = useStaticQuery(FooterQuery)
  const data = footerQuery.allStrapiFooter.edges[0].node
  const emailRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (emailRef.current.value.trim()) {
      axios
        .post(
          "https://omnimetic-website-cms-xeyel.ondigitalocean.app/subscribers",
          {
            email: emailRef.current.value.trim(),
            publishTime: Date().toLocaleString(),
          }
        )
        .then(res => res)
        .catch(err => err)
    }
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
    <div className="bg-footerMobile xl:bg-footer bg-aliceblue-1 bg-no-repeat bg-cover pb-3 h-350 xl:h-268">
      <div className="pt-20 xl:pt-100 flex flex-col xl:flex-row px-5 xl:px-93-1 justify-center xl:justify-between items-center">
        <img
          src={data.Logo.localFile.url}
          alt="logo"
          className="mb-5 ml:mb-0 w-28 xl:w-auto h-5 xl:h-auto"
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col xl:flex-row items-center"
        >
          <input
            type="email"
            pattern="^\S+@\S+\.\S+"
            className="mb-3 xl:mb-0 w-318 xl:w-454 text-17 pl-27 h-9 xl:h-47 rounded-sm"
            placeholder="Your email here"
            ref={emailRef}
            required
          />
          <input
            type="submit"
            value="Subscribe"
            className="focus:outline-none font-medium text-17 text-white bg-indigo-1 xl:ml-18 h-7 xl:h-47 w-92 xl:w-150 rounded-sm xl:mt-0 mt-3"
          />
        </form>
      </div>
      <div className="px-5 xl:px-93-1 pt-6 flex flex-col-reverse xl:flex-row justify-between items-center">
        <div className="flex justify-between w-44 xl:w-48">
          <a
            href={encodeURI(data.TwitterLink)}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={data.SocialIconTwitter.localFile.url}
              alt="twitter"
              className="h-4 xl:h-auto xl:w-auto cursor-pointer"
            />
          </a>
          <a
            href={encodeURI(data.FacebookLink)}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={data.SocialIconFacebook.localFile.url}
              alt="fb"
              className="h-4 xl:h-auto xl:w-auto cursor-pointer"
            />
          </a>
          <a
            href={encodeURI(data.InstagramLink)}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={data.SocialIconInstagram.localFile.url}
              alt="insta"
              className="h-4 xl:h-auto xl:w-auto cursor-pointer"
            />
          </a>
          <a
            href={encodeURI(data.LinkedinLink)}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={data.SocialIconLinkedin.localFile.url}
              alt="linkedIn"
              className="h-4 xl:h-auto xl:w-auto cursor-pointer"
            />
          </a>
        </div>
        <div className="mb-4 xl:mb-0 font-Inter text-12 xl:text-18 text-white flex justify-between w-318 xl:w-620">
          <a
            className="focus:outline-none text-white"
            href="mailto:mohit@jalantechnologies.com"
          >
            {data.FooterButton1}
          </a>
          <button className="focus:outline-none" onClick={onClickHome}>
            {data.FooterButton2}
          </button>
          <button className="focus:outline-none" onClick={onClickResources}>
            {data.FooterButton3}
          </button>
          <button className="focus:outline-none" onClick={onClickDemo}>
            {data.FooterButton4}
          </button>
        </div>
      </div>
      <div className="my-1 xl:mt-6 xl:mb-2.5 mx-5 xl:mx-93 h-px bg-white opacity-60" />
      <p className="font-Inter text-10 xl:text-16 text-white text-center">
        {data.CopyrightsText}{" "}
      </p>
    </div>
  )
}

const FooterQuery = graphql`
  query {
    allStrapiFooter {
      edges {
        node {
          FooterButton1
          FooterButton2
          FooterButton3
          FooterButton4
          CopyrightsText
          FacebookLink
          InstagramLink
          LinkedinLink
          TwitterLink
          Logo {
            localFile {
              url
            }
          }
          SocialIconFacebook {
            localFile {
              url
            }
          }
          SocialIconInstagram {
            localFile {
              url
            }
          }
          SocialIconLinkedin {
            localFile {
              url
            }
          }
          SocialIconTwitter {
            localFile {
              url
            }
          }
        }
      }
    }
  }
`
