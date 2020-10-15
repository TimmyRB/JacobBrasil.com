import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ImageWrap = styled.div`
  width: 65vw;

  @media (max-width: 1079px) {
    display: none;
  }
`

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "Phone" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.file?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <ImageWrap>
      <Img fluid={data.file.childImageSharp.fluid} />
    </ImageWrap>
  )
}

export default HeroImage
