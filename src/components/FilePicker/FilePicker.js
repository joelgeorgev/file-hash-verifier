import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 8rem;
  border: 1px dashed #aaa;
`
const Label = styled.label`
  padding: 0 1rem;
  font-weight: 700;
  cursor: pointer;
`

const Input = styled.input`
  display: none;
`

export const FilePicker = ({ disabled, onChange }) => {
  const onDragOver = (e) => e.preventDefault()
  const onDragLeave = (e) => e.preventDefault()
  const onDrop = (e) => {
    e.preventDefault()
    if (!disabled) {
      onChange(e)
    }
  }

  return (
    <Wrapper onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
      <Label htmlFor='file-picker'>
        Drop your file here or click to pick one.
      </Label>
      <Input
        type='file'
        id='file-picker'
        multiple={false}
        onChange={onChange}
        disabled={disabled}
      />
    </Wrapper>
  )
}
