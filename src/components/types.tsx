import { IGatsbyImageData } from "gatsby-plugin-image"

interface TagType {
  id: string
  title: string
  slug: string
}

interface ProjectType {
  id: string
  title: string
  slug: string
  description: any
  category: TagType[]
  image: {
    gatsbyImageData: IGatsbyImageData
  }
}

export { TagType, ProjectType }
