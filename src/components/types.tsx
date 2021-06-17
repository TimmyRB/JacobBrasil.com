import { FluidObject } from "gatsby-image"

interface TagType {
  id: string
  title: string
  slug: string
}

interface ProjectType {
  id: string
  title: string
  slug: string
  category: TagType[]
  image: {
    fluid: FluidObject | FluidObject[]
  }
}

export { TagType, ProjectType }
