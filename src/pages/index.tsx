import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"
import DefaultLayout from "../components/layouts/DefaultLayout"

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
      <SEO title="Home" />
      <DefaultLayout isPurple={true}>
        <Navbar
          usePurple={true}
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />
        <Hero />
      </DefaultLayout>
    </>
  )
}

IndexPage.propTypes = {

}

export default IndexPage
