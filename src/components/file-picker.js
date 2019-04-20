import React from 'react'

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
    <div
      className='flex flex-column justify-center h4 ba b--dashed b--light-silver'
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <label htmlFor='file-picker' className='self-center pointer b'>
        Drop your file here or click to pick one.
      </label>
      <input
        type='file'
        id='file-picker'
        multiple={false}
        className='dn'
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}
