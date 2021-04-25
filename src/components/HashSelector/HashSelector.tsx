import styled from 'styled-components'

import type { HashType } from '../../types'

interface Props {
  hashType: HashType | null
  isDisabled: boolean
  onSelect: (hashType: HashType) => void
}

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

const radioButtons: [string, HashType][] = [
  ['SHA-1', 'sha-1'],
  ['SHA-256', 'sha-256'],
  ['SHA-384', 'sha-384'],
  ['SHA-512', 'sha-512']
]

export const HashSelector = ({ hashType, isDisabled, onSelect }: Props) => (
  <FieldSet disabled={isDisabled}>
    {radioButtons.map(([label, value]) => (
      <label key={value}>
        <Input
          type='radio'
          name='hash-type'
          value={value}
          checked={value === hashType}
          onChange={(event) => onSelect(event.target.value as typeof value)}
        />
        {label}
      </label>
    ))}
  </FieldSet>
)
