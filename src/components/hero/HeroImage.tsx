import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
          fluid(pngQuality: 100) {
            ...GatsbyImageSharpFluid_noBase64
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
