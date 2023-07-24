import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import Header from "../components/Header"
import HomeHero from "../components/HomeHero"
import Linking from "../components/Linking"
import Footer from "../components/Footer"

export default function Home() {
  const metaQuery = useStaticQuery(MetaQuery)
  const data = metaQuery.allStrapiHomePage.edges[0]
  

  return (
    <div className="xl:w-desktop w-auto xl:mx-auto overflow-hidden">
      <Helmet>
        <title>{data.node.MetaTitle}</title>
        <meta name="description" content={data.node.MetaDescription} />
      </Helmet>
      <Header />
      <HomeHero />
      <Linking />
      <Footer />
    </div>
  )
}

const MetaQuery = graphql`
  query {
    allStrapiHomePage {
      edges {
        node {
          MetaTitle
          MetaDescription
        }
      }
    }
  }
`
