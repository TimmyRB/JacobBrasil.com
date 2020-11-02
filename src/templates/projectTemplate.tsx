import React, { useState } from "react"
import { graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShareAlt } from "@fortawesome/free-solid-svg-icons"

import Notifications, { notify } from "react-notify-toast"

import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import Img from "gatsby-image"
import SEO from "../components/seo"
import styled from "styled-components"
import Navbar from "../components/navbar/Navbar"
import ProjectLayout from "../components/layouts/ProjectLayout"
import { copyToClipboard } from "../utils/CopyToClipboard"

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      description {
        json
      }
      image {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
      updatedAt
    }
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
`

const FeaturedImage = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 3px 24px rgba(0, 0, 0, 0.16);
  transition: scale 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  @media (min-width: 90rem) {
    float: right;
    width: 49%;
    margin-left: 1.35rem;
    margin-bottom: 0.5rem;

    :hover {
      transform: scale(1.025, 1.025);
    }
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 90rem) {
    float: left;
    width: 49%;
    margin-top: -18px;
  }
`

const HeaderText = styled.div``

const Title = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: #0f0f11;
  text-decoration: none;
  margin-top: 1rem;
`

const Subtitle = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #5C5C5C;
`

const Content = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: #0f0f11;
  text-align: justify;
`

const ProjectTemplate = props => {
  return (
    <>
      <SEO title={props.data.contentfulProject.title} />
      <ProjectLayout>
        <Notifications />
        <Navbar
          useDark={true}
          menuLinks={props.data.site.siteMetadata.menuLinks}
          siteTitle={props.data.site.siteMetadata?.title || `Title`}
        />
        <FeaturedImage>
          {props.data.contentfulProject.image && (
            <Img
              fluid={props.data.contentfulProject.image.fluid}
              alt={props.data.contentfulProject.title}
            />
          )}
        </FeaturedImage>
        <Header>
          <HeaderText>
            <Title>{props.data.contentfulProject.title}</Title>
            <br/>
            <Subtitle>
              Updated {new Date(props.data.contentfulProject.updatedAt).toLocaleString()}
            </Subtitle>
          </HeaderText>
          <FontAwesomeIcon
            icon={faShareAlt}
            color="#5d5df9"
            style={{ paddingTop: "1.25rem", cursor: "pointer" }}
            onClick={() => {
              if (navigator.share) {
                navigator
                  .share({
                    title:
                      `JacobBrasil.com | ` + props.data.contentfulProject.title,
                    url: window.location.href,
                  })
                  .catch(console.error)
              } else {
                copyToClipboard(window.location.href)
                notify.show("Copied!", "custom", 5000, {
                  background: "#5d5df9",
                  text: "#f7f7ff",
                })
              }
            }}
            size="2x"
          />
        </Header>
        <Content
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(
              props.data.contentfulProject.description.json
            ),
          }}
        />
      </ProjectLayout>
    </>
  )
}

export default ProjectTemplate
