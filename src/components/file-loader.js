import React from 'react'

export const FileLoader = ({ progress, cancelFileRead }) => (
  <div className='flex justify-center mt4 b'>
    <label>Loading file: {progress}%</label>
    <button className='ml2' onClick={cancelFileRead}>
      Cancel
    </button>
  </div>
)
