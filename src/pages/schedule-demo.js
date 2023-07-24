import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { InlineWidget } from "react-calendly"
import { Helmet } from "react-helmet"

export default function ScheduleDemo() {
  return (
    <div className="xl:w-desktop w-auto xl:mx-auto overflow-hidden">
      <Helmet>
        <title>Omnimetic - Schedule Demo</title>
        <meta name="description" content="Schedule Demo with Omnimetic" />
      </Helmet>
      <Header />
      <div className="flex flex-col xl:flex-row w-full relative py-5">
        <div className="xl:w-1/2 px-7 xl:px-32 pt-40">
          <h3 className="focus:outline-none text-14-1 xl:text-20-1 text-indigo-1">
            Ready To See Omnimetic In Action?
          </h3>
          <h1 className="font-bold text-32 xl:text-48 xl:w-553 xl:mt-18">
            Schedule a demo
          </h1>
          <p className="text-14 xl:text-20-1 font-normal mt-3 xl:mb-50 text-indigo-2">
            Select a meeting time to schedule a demo with one of the members of
            our product team.
          </p>
        </div>
        <div className="xl:w-1/2 mx-7 xl:mx-0 mt-10 xl:mt-0 shadow-2xl xl:shadow-none">
          <InlineWidget
            url="https://calendly.com/mohit-jtc/omnimetic-demo"
            styles={{ height: "890px" }}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
