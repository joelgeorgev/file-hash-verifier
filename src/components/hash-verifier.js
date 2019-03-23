import React, { useState } from 'react'

import success from '../assets/success.svg'
import fail from '../assets/fail.svg'

export const HashVerifier = ({ hash }) => {
  const [verify, setVerify] = useState(false)
  const [text, setText] = useState('')
  const [match, setMatch] = useState(false)

  const toggleVerify = (e) => setVerify(e.target.checked)

  const verifyHash = (e) => {
    const inputText = e.target.value
    setText(inputText)
    setMatch(hash === inputText.replace(/ /g, '').toLowerCase())
  }

  return (
    <div className='flex flex-column mt4'>
      <div>
        <input type='checkbox' checked={verify} className='pointer'
          onChange={toggleVerify} />
        <label className='ml2 b'>Compare with:</label>
      </div>
      {verify &&
        <div className='flex h2'>
          <input type='text' value={text}
            className='w-100 ph1 bt br-0 bb bl b--light-silver'
            onChange={verifyHash} />
          <button className='bg-transparent ba b--light-silver'>
            <img src={match ? success : fail}
              alt={match ? 'Success' : 'Fail'} className='w1' />
          </button>
        </div>}
    </div>
  )
}