import type { HashType } from '../../types'

import './HashSelector.css'

interface Props {
  hashType: HashType | null
  isDisabled: boolean
  onSelect: (hashType: HashType) => void
}

const radioButtons: [string, HashType][] = [
  ['SHA-1', 'sha-1'],
  ['SHA-256', 'sha-256'],
  ['SHA-384', 'sha-384'],
  ['SHA-512', 'sha-512']
]

export const HashSelector = ({ hashType, isDisabled, onSelect }: Props) => (
  <fieldset disabled={isDisabled} className='hash-selector'>
    {radioButtons.map(([label, value]) => (
      <label key={value}>
        <input
          type='radio'
          name='hash-type'
          value={value}
          checked={value === hashType}
          className='input'
          onChange={(event) => onSelect(event.target.value as typeof value)}
        />
        {label}
      </label>
    ))}
  </fieldset>
)
