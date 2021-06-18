import React, { useCallback, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Tag from "./Tag"
import { ProjectType, TagType } from "../types"
import ProjectCard from "./ProjectCard"

const ShowcaseHolder = styled.div`
  color: #13162a;
  padding: 8vh 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`

const ShowcaseContent = styled.div``

const ShowcaseTitle = styled.span`
  position: fixed;
  font-weight: 700;
  font-size: 3rem;
  max-width: 30rem;
  word-wrap: break;
  text-transform: uppercase;
  line-height: 0.95;
  cursor: default;

  @media (max-width: 767px) {
    position: relative;
    font-size: 2.85rem;
  }
`

const TagsGrid = styled.span`
  position: fixed;
  margin-top: 7vh;
  display: flex;
  width: 27vw;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    position: inherit;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 3vh;
    margin-bottom: 3vh;
    width: 100%;
  }

  @media (min-width: 1800px) {
    width: 17vw;
  }
`

const ProjectsGrid = styled.span`
  display: grid;
  width: 40vw;
  grid-gap: 12px;
  grid-template-columns: 1fr 1fr;
  direction: rtl;
  overflow: visible;

  @media (min-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`

type Tags = {
  [k: string]: {
    title: string
    slug: string
  }
}

interface Query {
  allContentfulProject: {
    edges: {
      node: ProjectType
    }[]
  }
}

const Showcase = () => {
  const data: Query = useStaticQuery(graphql`
    query ShowcaseQuery {
      allContentfulProject(sort: { fields: updatedAt, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            image {
              fluid(quality: 100) {
                ...GatsbyContentfulFluid_noBase64
              }
            }
            category {
              id
              title
              slug
            }
          }
        }
      }
    }
  `)

  let tags: Tags = {}
  data.allContentfulProject.edges.forEach(p => {
    p.node.category.forEach(t => {
      tags[t.id] = { title: t.title, slug: t.slug }
    })
  })

  const [enabledTags, setEnabledTags] = useState([])
  const [, updateState] = useState(0)
  const forceUpdate = useCallback(() => updateState(tick => tick + 1), [])

  function set(array: any[]) {
    setEnabledTags(array)
    forceUpdate()
  }

  function checkTags(tags: TagType[]): boolean {
    let foundCount = 0
    tags.forEach(t => {
      if (enabledTags.includes(t.title)) {
        foundCount++
      }
    })

    return foundCount === enabledTags.length
  }

  return (
    <ShowcaseHolder>
      <ShowcaseContent>
        <ShowcaseTitle>Projects</ShowcaseTitle>
        <br />
        <TagsGrid>
          {Object.values(tags).map(tag => (
            <Tag
              key={tag.title}
              text={tag.title}
              enabledTags={enabledTags}
              setEnabledTags={set}
            />
          ))}
        </TagsGrid>
        {/* <ToggleHolder>
          <Toggle id="toggle" onClick={() => setAbsoluteMode(!absoluteMode)} />
          <ToggleLabel htmlFor="toggle">Strict mode</ToggleLabel>
        </ToggleHolder> */}
      </ShowcaseContent>
      <ProjectsGrid>
        {data.allContentfulProject.edges.map(project =>
          enabledTags.length > 0 ? (
            checkTags(project.node.category) ? (
              <ProjectCard
                key={project.node.id}
                project={project.node}
                enabledTags={enabledTags}
              />
            ) : (
              ""
            )
          ) : (
            <ProjectCard
              key={project.node.id}
              project={project.node}
              enabledTags={enabledTags}
            />
          )
        )}
      </ProjectsGrid>
    </ShowcaseHolder>
  )
}

export default Showcase
