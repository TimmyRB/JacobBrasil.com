import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Navbar from "../components/navbar/Navbar"
import Showcase from "../components/projects/Showcase"
import ShowcaseLayout from "../components/layouts/ShowcaseLayout"
import DefaultLayout from "../components/layouts/DefaultLayout"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
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
      <SEO title="Projects" />
      <ShowcaseLayout>
        <Showcase/>
      </ShowcaseLayout>
    </>
  )
}

ProjectsPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectsPage
