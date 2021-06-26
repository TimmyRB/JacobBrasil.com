import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"
import Showcase from "../components/projects/Showcase"
import ShowcaseLayout from "../components/layouts/ShowcaseLayout"
import DefaultLayout from "../components/layouts/DefaultLayout"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query ProjectsSiteTitleQuery {
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
      <SEO title="Projects" themeColor="#f7f7ff" />
      <DefaultLayout>
        <Navbar
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />
      </DefaultLayout>
      <ShowcaseLayout>
        <Showcase />
      </ShowcaseLayout>
    </>
  )
}

ProjectsPage.propTypes = {}

export default ProjectsPage
