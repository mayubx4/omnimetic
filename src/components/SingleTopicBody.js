import React, { useRef } from "react"
import axios from "axios"
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"
import shape3 from "../images/shape3.png"
import shape4 from "../images/shape4.png"
import twitter from "../images/twitter.png"
import fb from "../images/fb.png"
import linkedIn from "../images/linkedIn.png"

export default function SingleTopicBody({ content, slug }) {
  const emailRef = useRef(null)
  const baseUrl = "https://www.omnimetic.com/"

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

  return (
    <>
      <div className="px-7 xl:px-24 pt-10 pb-2 xl:pb-16 bg-aliceblue-1 xl:mt-44">
        <div className=" max-w-screen-sm mx-auto xl:max-w-max">
          <div
            className="text-14-1 xl:text-20-1 text-indigo-2 font-Inter"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <div className="mt-10 xl:mt-12 mb-10 xl:mb-28 bg-gray-1 flex justify-center h-14 xl:h-20 rounded font-Inter">
            <div className="flex flex-col xl:flex-row items-center my-auto">
              <p className="text-xs xl:text-20-1 text-white">Share</p>
              <div className="h-px xl:h-12 w-7 xl:w-px bg-white mx-0 xl:mx-6 my-2 xl:my-0" />
              <div className="flex justify-between w-24 xl:w-48">
                <TwitterShareButton url={baseUrl + `${slug}`}>
                  <img
                    src={twitter}
                    alt="twitter"
                    className="h-2.5 xl:h-auto"
                  />
                </TwitterShareButton>
                <FacebookShareButton url={baseUrl + `${slug}`}>
                  <img src={fb} alt="fb" className="h-2.5 xl:h-auto" />
                </FacebookShareButton>
                <LinkedinShareButton url={baseUrl + `${slug}`}>
                  <img
                    src={linkedIn}
                    alt="linkedIn"
                    className="h-2.5 xl:h-auto"
                  />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
          <div className="relative bg-white xl:w-789 h-75 xl:h-186 mx-auto rounded-xl shadow-2xl font-Inter">
            <img
              src={shape3}
              alt="shape"
              className="absolute h-8 xl:h-20 top-0 right-0 rounded-tr-xl"
            />
            <h3 className="text-12-1 xl:text-27 text-center font-semibold  xl:pt-8 ">
              Subscribe To Our Newsletter
            </h3>
            <form
              className="w-full flex justify-center z-10 absolute bottom-3 xl:bottom-7"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                pattern="^\S+@\S+\.\S+"
                className="w-3/5 xl:w-495 xl:h-55 pl-3 xl:pl-27 text-7 xl:text-17 bg-white border border-indigo-500 z-10"
                placeholder="Your email here"
                ref={emailRef}
                required
              />
              <input
                type="submit"
                value="Subscribe"
                className="focus:outline-none h-5 xl:h-55 w-67 xl:w-164 font-medium text-7 xl:text-17 text-white bg-indigo-1 ml-2 xl:ml-18 z-0"
              />
            </form>
            <img
              src={shape4}
              alt="shape"
              className="absolute h-12 xl:h-2/3 bottom-0 left-0 rounded-bl-xl"
            />
          </div>
        </div>
      </div>
    </>
  )
}
