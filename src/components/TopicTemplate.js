import React from "react"

export default function TopicTemplate({
  topic,
  title,
  excerpt,
  img,
  author,
  slug,
  authorImg,
  socialMediaLinkAuthor,
  readMore = true,
}) {
  return (
    <div className="flex justify-between px-7 xl:px-24 pb-14 xl:pb-52 bg-aliceblue-1">
      <div className="mx-auto max-w-lg xl:max-w-max font-Inter">
        <h6 className="text-16-1 xl:text-20-1 font-medium text-indigo-1 mt-5 mb-2">
          {topic}
        </h6>
        <div className="flex flex-col-reverse xl:flex-row w-full">
          <h1 className="text-32-0 xl:text-36 font-semibold my-5 xl:my-0 xl:mb-9 xl:w-1/2">
            {title}
          </h1>
          <div className="flex xl:justify-end items-center xl:items-start xl:w-1/2">
            <a href={socialMediaLinkAuthor} target="_blank" rel="noreferrer">
              <img
                src={authorImg}
                alt=""
                className="w-29 xl:w-11 h-29 xl:h-11 rounded-full object-cover"
              />
            </a>
            <h6 className="text-16-1 xl:text-20-1 font-medium ml-4">
              {author}
            </h6>
          </div>
        </div>
        <div className="flex flex-col-reverse xl:flex-row">
          <div className="xl:w-1/2">
            <p className="text-14-1 xl:text-20-1 xl:pr-20 my-5 font-normal text-indigo-2">
              {excerpt}
            </p>
            {readMore && (
              <a
                className="group flex items-center focus:outline-none text-left text-14 xl:text-20 font-medium text-indigo-1 w-max xl:mt-6"
                href={`/${slug}/`}
              >
                Read More
                <span className="xl:-mr-1 opacity-0 group-hover:opacity-100 transform text-yellow-1 xl:mt-1">
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
            )}
          </div>
          <img
            src={img}
            alt=""
            className="rounded-2xl xl:w-627 xl:h-352 xl:mt-9"
          />
        </div>
      </div>
    </div>
  )
}
