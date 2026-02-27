import copy from 'clipboard-copy'

import type { Hash } from '../../types'

import './FileHash.css'

import clippy from '../../assets/clippy.svg'

interface Props {
  hash: Hash
}

export const FileHash = ({ hash }: Props) => (
  <div className='file-hash'>
    <label htmlFor='hash' className='label'>
      Hash:
    </label>
    <div className='hash-wrapper'>
      <input type='text' id='hash' value={hash} readOnly className='input' />
      <button className='button' onClick={() => copy(hash)}>
        <img src={clippy} alt='Copy to clipboard' className='img' />
      </button>
    </div>
  </div>
)
