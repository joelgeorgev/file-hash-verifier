import React from 'react'

export const HashSelector = ({ hashType, disabled, onChange }) => {
  return (
    <div className='flex justify-center mt4 b'>
      <input type='radio' name='hash-type' value='sha-1' checked={'sha-1' === hashType}
        className='mh2' onChange={onChange} disabled={disabled} />SHA-1
        <input type='radio' name='hash-type' value='sha-256' checked={'sha-256' === hashType}
        className='mh2' onChange={onChange} disabled={disabled} />SHA-256
        <input type='radio' name='hash-type' value='sha-384' checked={'sha-384' === hashType}
        className='mh2' onChange={onChange} disabled={disabled} />SHA-384
        <input type='radio' name='hash-type' value='sha-512' checked={'sha-512' === hashType}
        className='mh2' onChange={onChange} disabled={disabled} />SHA-512
      </div>
  )
}