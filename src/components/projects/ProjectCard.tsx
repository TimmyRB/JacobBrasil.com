import React from "react"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import { Link } from "gatsby"
import { ProjectType, TagType } from "../types"
import { FluidObject } from "gatsby-image"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background-color: #fbfbff;
  border-radius: 14px;
  color: #13162a;
  text-align: left;
  padding: 14px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  direction: ltr;

  :hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`

const Image = styled(Img)<{ fluid: FluidObject | FluidObject[] }>`
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  overflow: hidden;
  border-radius: 7px;
`

const Title = styled.span`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 600;
`

const TagsGrid = styled.span`
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.div<{ enabled: boolean }>`
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  overflow: clip;
  object-fit: cover;
  padding: 2px 8px;
  border-radius: 5px;
  margin-right: 4px;
  margin-top: 4px;
  background-color: ${props => (props.enabled ? "#4949e5" : "#eee")};
  color: ${props => (props.enabled ? "#fff" : "#13162a")};
`

const ProjectCard = ({ project, enabledTags }: ProjectCardProps) => (
  <Card as={Link} to={project.slug}>
    <Image
      key={project.id}
      className="slideImg"
      objectFit="cover"
      alt={project.title}
      fluid={project.image.fluid}
    />
    <Title>{project.title}</Title>
    <TagsGrid>
      {project.category.map(tag => (
        <Tag key={tag.id} enabled={enabledTags.includes(tag.title)}>
          {tag.title}
        </Tag>
      ))}
    </TagsGrid>
  </Card>
)

interface ProjectCardProps {
  project: ProjectType
  enabledTags: any[]
}

export default ProjectCard
