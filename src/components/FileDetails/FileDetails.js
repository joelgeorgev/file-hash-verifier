import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 2rem;
`

const Key = styled.label`
  font-weight: 700;
`

const Value = styled.label`
  word-break: break-all;
`

export const FileDetails = ({ file }) => {
  const { name, size } = file

  return (
    <Wrapper>
      <div>
        <Key>Name: </Key>
        <Value>{name}</Value>
      </div>
      <div>
        <Key>Size: </Key>
        <Value>{size} bytes</Value>
      </div>
    </Wrapper>
  )
}
