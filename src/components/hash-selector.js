import React from 'react'

export const HashSelector = ({ hashType, disabled, onChange }) => {
  return (
    <div className='flex justify-center mt4 b'>
      <label>
        <input
          type='radio'
          name='hash-type'
          value='sha-1'
          checked={'sha-1' === hashType}
          className='mh3'
          onChange={onChange}
          disabled={disabled}
        />
        SHA-1
      </label>
      <label>
        <input
          type='radio'
          name='hash-type'
          value='sha-256'
          checked={'sha-256' === hashType}
          className='mh3'
          onChange={onChange}
          disabled={disabled}
        />
        SHA-256
      </label>
      <label>
        <input
          type='radio'
          name='hash-type'
          value='sha-384'
          checked={'sha-384' === hashType}
          className='mh3'
          onChange={onChange}
          disabled={disabled}
        />
        SHA-384
      </label>
      <label>
        <input
          type='radio'
          name='hash-type'
          value='sha-512'
          checked={'sha-512' === hashType}
          className='mh3'
          onChange={onChange}
          disabled={disabled}
        />
        SHA-512
      </label>
    </div>
  )
}
