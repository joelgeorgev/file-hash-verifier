import React from 'react'

export const FileDetails = ({ file }) => {
  const { name, size } = file

  return (
    <div className='mt4'>
      <div>
        <label className='b'>Name: </label>
        <label>{name}</label>
      </div>
      <div>
        <label className='b'>Size: </label>
        <label>{size} bytes</label>
      </div>
    </div>
  )
}