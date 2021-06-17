import React from "react"
import styled from "styled-components"
import { useState } from "react"

const TagWrap = styled.div<{ enabled: boolean }>`
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  overflow: clip;
  object-fit: cover;
  padding: 2px 8px 2px 8px;
  border-radius: 5px;
  margin-right: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.enabled ? "#4949e5" : "#eee")};
  color: ${props => (props.enabled ? "#fff" : "#13162a")};
  /* opacity: ${props => (props.enabled ? "1" : "0.65")}; */
  min-width: auto;
  min-height: auto;
`
const Tag = ({ text, enabledTags, setEnabledTags }: TagProps) => {
  const [selected, setSelected] = useState(false)

  return (
    <TagWrap
      enabled={selected}
      onClick={() => {
        setSelected(!selected)

        let enabled: any[] = enabledTags
        if (!selected) enabled.push(text)
        else if (enabled.indexOf(text) !== -1)
          enabled.splice(enabled.indexOf(text), 1)

        setEnabledTags(enabled)
      }}
    >
      {text}
    </TagWrap>
  )
}

interface TagProps {
  text: string
  enabledTags: any[]
  setEnabledTags: (array: any[]) => void
}

export default Tag
