import React from 'react'

export const FileLoader = ({ progress, cancelFileRead }) => {
  return (
    <div className='flex justify-center mt4 b'>
      <div>
        <label>Loading file: {progress}%</label>
        <button className='ml2' onClick={cancelFileRead}>
          Cancel
        </button>
      </div>
    </div>
  )
}
