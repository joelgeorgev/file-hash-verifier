import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  font-weight: 700;
  text-align: center;
`

const Input = styled.input`
  margin: 0 1rem;
`

export const HashSelector = ({ hashType, disabled, onChange }) => (
  <Wrapper>
    <label>
      <Input
        type='radio'
        name='hash-type'
        value='sha-1'
        checked={'sha-1' === hashType}
        onChange={onChange}
        disabled={disabled}
      />
      SHA-1
    </label>
    <label>
      <Input
        type='radio'
        name='hash-type'
        value='sha-256'
        checked={'sha-256' === hashType}
        onChange={onChange}
        disabled={disabled}
      />
      SHA-256
    </label>
    <label>
      <Input
        type='radio'
        name='hash-type'
        value='sha-384'
        checked={'sha-384' === hashType}
        onChange={onChange}
        disabled={disabled}
      />
      SHA-384
    </label>
    <label>
      <Input
        type='radio'
        name='hash-type'
        value='sha-512'
        checked={'sha-512' === hashType}
        onChange={onChange}
        disabled={disabled}
      />
      SHA-512
    </label>
  </Wrapper>
)
