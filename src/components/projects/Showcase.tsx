import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "../layouts/layout.css"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
}

const ShowcaseHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  height: 100%;
`

const Slide = styled.div`
  position: relative;
  width: 812px;
  height: 456px;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 3px 24px rgba(0, 0, 0, 0.16);
  cursor: pointer;

  @media (max-width: 1366px) {
    margin-top: -5vh;
  }

  @media (max-width: 1080px) {
    margin-top: auto;
  }

  @media (max-width: 882px) {
    width: 337.5px;
    height: 190px;
  }
`

const ShowcaseContent = styled.div`
  align-self: center;
  color: #5d5cf8;
  text-transform: uppercase;
  font-weight: 700;
`

const ShowcaseTitle = styled.span`
  position: relative;
  z-index: 0;
  font-size: 12rem;

  @media (max-width: 1366px) {
    font-size: 10rem;
  }

  @media (max-width: 882px) {
    font-size: 4.5rem;
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
        <Slide>
          <Slider {...settings}>
            {data.allContentfulProject.edges.map(edge => (
              <a href={"/projects/" + edge.node.slug}>
                <Img className="slideImg" objectFit="fill" alt={edge.node.title} fluid={edge.node.image.fluid} />
              </a>
            ))}
          </Slider>
        </Slide>
      </ShowcaseContent>
    </ShowcaseHolder>
  )
}

export default Showcase
