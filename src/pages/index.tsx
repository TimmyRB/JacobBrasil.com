import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"
import Showcase from "../components/projects/Showcase"
import ShowcaseLayout from "../components/layouts/ShowcaseLayout"
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
      <DefaultLayout>
        <Navbar
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />
        <Hero />
      </DefaultLayout>
      <ShowcaseLayout>
        <Showcase/>
      </ShowcaseLayout>
    </>
  )
}

IndexPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexPage
