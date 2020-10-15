import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Featured from "../components/featured"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"
import MobileCTA from "../components/mobileCTA/MobileCTA"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            slug
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Navbar
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />
        <Hero/>
      </Layout>
    </>
  )
}

IndexPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexPage
