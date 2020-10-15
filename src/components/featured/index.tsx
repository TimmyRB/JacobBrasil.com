import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"
import "./featured.css"

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedQuery {
        allContentfulProject(
          limit: 1
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" } }
        ) {
          edges {
            node {
              id
              slug
              title
              description
              category {
                title
                slug
              }
              image {
                fluid(maxWidth: 1364, quality: 85) {
                  src
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        {data.allContentfulProject.edges.map(edge => (
          <div key={edge.node.id} className="header_section">
            <div
              className="header_hero"
              style={{
                backgroundImage: `url(${edge.node.featuredImage.fluid.src})`,
              }}
            ></div>
            <div className="header_content">
              <div className="header_info">
                <h1 className="header_title">{edge.node.title}</h1>
                <p className="header_subtitle">{edge.node.shortDescription}</p>
                <button
                  onClick={() => navigate(`/projects/${edge.node.slug}`)}
                  className="btn_med"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </header>
    )}
  />
)
