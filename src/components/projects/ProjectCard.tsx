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

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  padding: 20px 20px;

  @media (max-width: 768px) {
    margin-top: 0.25rem;
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
  margin-right: 2px;
  margin-top: 4px;
  background-color: #4949e5;
  color: #f7f7ff;
  opacity: ${props => (props.enabled ? "1" : "0.65")};
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
