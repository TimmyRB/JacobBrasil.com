import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ImageWrap = styled.div`
  transition: margin-top 1s ease;
  width: 50vw;

  @media (max-width: 1000px) {
    display: none;
  }

  :hover {
    margin-top: -2.5vh;
  }
`

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "Phone" }, extension: { eq: "png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  `)

  if (!data?.file?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>
  }

  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <ImageWrap>
      {image && (
        <GatsbyImage image={image} alt="Hero Image" />
      )}
    </ImageWrap>
  )
}

export default HeroImage
