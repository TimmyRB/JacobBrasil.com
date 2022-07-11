import React, { useState } from "react"
import { graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShareAlt } from "@fortawesome/free-solid-svg-icons"

import Notifications, { notify } from "react-notify-toast"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/seo"
import styled from "styled-components"
import Navbar from "../components/navbar/Navbar"
import ProjectLayout from "../components/layouts/ProjectLayout"
import { copyToClipboard } from "../utils/CopyToClipboard"
import { ProjectType, TagType } from "../components/types"

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      id
      title
      category {
        id
        title
        slug
      }
      description {
        raw
      }
      image {
        gatsbyImageData
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

// const Row = styled.div`
//   display: flex;
//   flex-direction: row;

//   @media (max-width: 1000px) {
//     flex-direction: column;
//   }
// `

// const Column = styled.div`
//   width: 50%;
//   display: flex;
//   flex-direction: column;

//   @media (max-width: 1000px) {
//     width: 100%;
//   }
// `

const FeaturedImage = styled.div`
  float: left;
  width: 50%;
  transition: scale 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  margin: 0 1rem 0 0;

  /* -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */

  @media (max-width: 1000px) {
    float: none;
    width: 100%;
    margin: 0 0 1rem 0;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
`

const HeaderText = styled.header``

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #0f0f11;
  text-decoration: none;
  margin: 0;
`

const Subtitle = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #5c5c5c;
`

const TagsGrid = styled.span`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`

const Tag = styled.div`
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  overflow: clip;
  object-fit: cover;
  padding: 2px 8px;
  border-radius: 5px;
  margin-right: 4px;
  margin-top: 4px;
  background-color: #eee;
  color: #13162a;
`

const Content = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: #0f0f11;
  text-align: justify;

  @media (max-width: 1000px) {
    margin-bottom: 2.5rem;
  }
`

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Content>{children}</Content>,
  },
}

const ProjectTemplate = props => {
  const project: ProjectType = props.data.contentfulProject
  return (
    <>
      <SEO title={project.title} themeColor="#13162a" />
      <ProjectLayout>
        <Notifications />
        <Navbar
          usePurple={false}
          menuLinks={props.data.site.siteMetadata.menuLinks}
          siteTitle={props.data.site.siteMetadata?.title || `Title`}
        />
        {/* <Row> */}
        <FeaturedImage>
          <GatsbyImage image={project.image.gatsbyImageData} alt={project.title} />
        </FeaturedImage>
        {/* <Column> */}
        <Header>
          <HeaderText>
            <Title>{project.title}</Title>
            <TagsGrid>
              {project.category.map((tag: TagType) => (
                <Tag key={tag.id}>{tag.title}</Tag>
              ))}
            </TagsGrid>
            {/* <br />
                <Subtitle>
                  Updated{" "}
                  {new Date(
                    props.data.contentfulProject.updatedAt
                  ).toLocaleString()}
                </Subtitle> */}
          </HeaderText>
          <FontAwesomeIcon
            icon={faShareAlt}
            color="#5C5EF3"
            style={{
              paddingTop: "0.75rem",
              fontSize: "1.25rem",
              cursor: "pointer",
              marginLeft: "0.5rem",
            }}
            onClick={() => {
              if (navigator.share) {
                navigator
                  .share({
                    title: `JacobBrasil.com | ` + project.title,
                    url: window.location.href,
                  })
                  .catch(console.error)
              } else {
                copyToClipboard(window.location.href)
                notify.show("Copied!", "custom", 5000, {
                  background: "#5C5EF3",
                  text: "#f7f7ff",
                })
              }
            }}
            size="2x"
          />
        </Header>
        {/* {documentToReactComponents(project.description.raw, options)} */}
        {renderRichText(project.description)}
        {/* </Column>
        </Row> */}
      </ProjectLayout>
    </>
  )
}

export default ProjectTemplate
