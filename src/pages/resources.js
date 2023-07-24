import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TopicsHead from "../components/TopicsHead"
import TopicsBody from "../components/TopicsBody"
import { Helmet } from "react-helmet"

export default function Resources() {
  return (
    <div className="xl:w-desktop w-auto xl:mx-auto overflow-hidden">
      <Helmet>
        <title>Omnimetic</title>
        <meta name="description" content="Omnimetic resources and blogs" />
      </Helmet>
      <Header />
      <TopicsHead />
      <TopicsBody />
      <Footer />
    </div>
  )
}
