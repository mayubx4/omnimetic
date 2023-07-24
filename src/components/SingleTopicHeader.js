import React from "react"

export default function SingleTopicHeader({
  topic,
  author,
  title,
  excerpt,
  img,
  authorImage,
  socialMediaLinkAuthor,
}) {
  return (
    <div className="px-7 xl:px-24 pt-20 pb-74 flex justify-between">
      <div className="flex flex-col bg-white max-w-screen-sm mx-auto xl:max-w-max xl:w-583 font-Inter">
        <h6 className="text-16-1 xl:text-20-1 font-medium text-indigo-1 mb-2 xl:mb-6">
          {topic}
        </h6>
        <div className="flex items-center mb-3.5">
          <a href={socialMediaLinkAuthor} target="_blank" rel="noreferrer">
            <img
              src={authorImage}
              alt=""
              className="w-29 xl:w-12 h-29 xl:h-12 rounded-full object-cover"
            />
          </a>
          <h6 className="text-16-1 xl:text-20-1 font-medium ml-4">{author}</h6>
        </div>
        <h1 className="text-32-0 xl:text-36 font-semibold xl:mb-10">{title}</h1>
        <img
          src={img}
          alt=""
          className="block xl:hidden rounded-2xl shadow-2xl my-10"
        />

        <p className="text-14-1 xl:text-20-1 font-normal text-indigo-2">
          {excerpt}
        </p>
      </div>
      <img
        src={img}
        alt=""
        className="hidden xl:block w-567 h-677 rounded-2xl z-0 shadow-3xl"
      />
    </div>
  )
}
