import React from 'react'
import styled from 'styled-components'

const FieldSet = styled.fieldset`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  font-weight: 700;
  text-align: center;
  border: 0;
`

const Input = styled.input`
  margin: 0 1rem;
`

const name = 'hash-type'

export const HashSelector = ({ hashType, isDisabled, onChange }) => (
  <FieldSet disabled={isDisabled}>
    <label>
      <Input
        type='radio'
        name={name}
        value='sha-1'
        checked={'sha-1' === hashType}
        onChange={onChange}
      />
      SHA-1
    </label>
    <label>
      <Input
        type='radio'
        name={name}
        value='sha-256'
        checked={'sha-256' === hashType}
        onChange={onChange}
      />
      SHA-256
    </label>
    <label>
      <Input
        type='radio'
        name={name}
        value='sha-384'
        checked={'sha-384' === hashType}
        onChange={onChange}
      />
      SHA-384
    </label>
    <label>
      <Input
        type='radio'
        name={name}
        value='sha-512'
        checked={'sha-512' === hashType}
        onChange={onChange}
      />
      SHA-512
    </label>
  </FieldSet>
)
