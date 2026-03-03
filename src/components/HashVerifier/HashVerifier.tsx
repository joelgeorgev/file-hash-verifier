import { useState, ChangeEvent } from 'react'

import type { Hash } from '../../types'

import './HashVerifier.css'

import success from '../../assets/success.svg'
import fail from '../../assets/fail.svg'

interface Props {
  hash: Hash
}

export const HashVerifier = ({ hash }: Props) => {
  const [text, setText] = useState('')
  const isMatch = hash === text.replace(/ /g, '').toLowerCase()

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value)
  }

  return (
    <div className='hash-verifier'>
      <label htmlFor='hash-verify' className='label'>
        Compare with:
      </label>
      <div className='verify-wrapper'>
        <input
          type='text'
          id='hash-verify'
          value={text}
          className={`input ${text && 'input--has-value'}`}
          onChange={handleChange}
        />
        {text && (
          <img
            src={isMatch ? success : fail}
            alt={isMatch ? 'Hashes match' : 'Hashes do not match'}
            className='img'
          />
        )}
      </div>
    </div>
  )
}
