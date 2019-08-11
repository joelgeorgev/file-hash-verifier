import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 2rem;
`

const StyledLabel = styled.label`
  font-weight: 700;
`

export const FileDetails = ({ file }) => {
  const { name, size } = file

  return (
    <Wrapper>
      <div>
        <StyledLabel>Name: </StyledLabel>
        <label>{name}</label>
      </div>
      <div>
        <StyledLabel>Size: </StyledLabel>
        <label>{size} bytes</label>
      </div>
    </Wrapper>
  )
}
