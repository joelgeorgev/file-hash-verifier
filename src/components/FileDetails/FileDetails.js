import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.dl`
  margin-top: 2rem;
`

const Key = styled.dt`
  font-weight: 700;
`

const Value = styled.dd`
  word-break: break-all;
  margin-bottom: 0.5rem;
`

export const FileDetails = ({ file }) => {
  const { name, size } = file

  return (
    <Wrapper>
      <Key>Name</Key>
      <Value>{name}</Value>
      <Key>Size</Key>
      <Value>{size} bytes</Value>
    </Wrapper>
  )
}
