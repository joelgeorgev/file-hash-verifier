import type { FileName, FileSize } from '../../types'

import './FileDetails.css'

interface Props {
  name: FileName
  size: FileSize
}

export const FileDetails = ({ name, size }: Props) => (
  <dl className='file-details'>
    <dt className='key'>Name</dt>
    <dd className='value'>{name}</dd>
    <dt className='key'>Size</dt>
    <dd className='value'>{size} bytes</dd>
  </dl>
)
