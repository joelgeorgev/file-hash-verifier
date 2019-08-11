import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 2rem;
  font-weight: 700;
  text-align: center;
`

export const HashLoader = () => (
  <Wrapper>
    <label>Calculating Hash...</label>
  </Wrapper>
)
