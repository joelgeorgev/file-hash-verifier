import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: block;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const FilePicker = ({ disabled, onChange }) => (
  <>
    <Label htmlFor='file-picker'>Click to pick a file.</Label>
    <input
      type='file'
      id='file-picker'
      multiple={false}
      disabled={disabled}
      onChange={(event) => onChange(event.target.files[0])}
    />
  </>
)
