import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 2rem;
  font-weight: 700;
  text-align: center;
`

const Button = styled.button`
  margin-left: 0.5rem;
`

export const FileLoader = ({ progress, cancelFileRead }) => (
  <Wrapper>
    <label>Loading file: {progress}%</label>
    <Button onClick={cancelFileRead}>Cancel</Button>
  </Wrapper>
)
