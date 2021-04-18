import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: block;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const FilePicker = ({ isDisabled, onSelect }) => (
  <>
    <Label htmlFor='file-picker'>Click to pick a file.</Label>
    <input
      type='file'
      id='file-picker'
      multiple={false}
      disabled={isDisabled}
      onChange={(event) => onSelect(event.target.files[0])}
    />
  </>
)
