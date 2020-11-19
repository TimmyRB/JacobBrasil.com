import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"

import "../layouts/layout.css"

const ShowcaseHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
  text-align: center;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 882px) {
    grid-template-columns: 1fr;
  }
`

const ShowcaseContent = styled.div`
  color: #5d5cf8;
  text-transform: uppercase;
  font-weight: 700;
  width: 65.12404580152672vw;

  @media (max-width: 882px) {
    width: 100vw;
  }
`

const ShowcaseTitle = styled.span`
  position: relative;
  z-index: 0;
  font-size: 12rem;
  max-width: 100%;

  @media (max-width: 1366px) {
    font-size: 8rem;
  }

  @media (max-width: 992px) {
    font-size: 3rem;
  }
`

const ProjectTile = styled.a`
  z-index: 1;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin: 10px 10px;

  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  :hover {
    z-index: 10;
    transform: scale(1.025);

    -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
    -moz-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const Showcase = () => {
  const data = useStaticQuery(graphql`
    query ShowcaseQuery {
      allContentfulProject(
        sort: { fields: [createdAt], order: ASC }
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            id
            slug
            title
            image {
              fluid(quality: 100) {
                ...GatsbyContentfulFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ShowcaseHolder id="projects">
      <ShowcaseContent>
        <ShowcaseTitle>Projects</ShowcaseTitle>
        <ProjectsGrid>
          {data.allContentfulProject.edges.map(edge => (
            <ProjectTile href={"/projects/" + edge.node.slug}>
              <Img
                className="slideImg"
                objectFit="cover"
                alt={edge.node.title}
                fluid={edge.node.image.fluid}
              />
            </ProjectTile>
          ))}
        </ProjectsGrid>
      </ShowcaseContent>
    </ShowcaseHolder>
  )
}

export default Showcase
