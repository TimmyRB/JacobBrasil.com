import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"
import ProjectsLayout from "../components/projects/projectsLayout"
import Showcase from "../components/projects/Showcase"

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
      <Layout>
        <Navbar
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />
        <Hero />
      </Layout>
      <ProjectsLayout>
        <Showcase/>
      </ProjectsLayout>
    </>
  )
}

IndexPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexPage
