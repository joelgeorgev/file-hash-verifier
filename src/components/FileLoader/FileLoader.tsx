import type { FileLoadProgress } from '../../types'

import './FileLoader.css'

interface Props {
  progress: FileLoadProgress
  onCancel: () => void
}

export const FileLoader = ({ progress, onCancel }: Props) => (
  <div className='file-loader'>
    <label htmlFor='file-load-progress'>Loading file:</label>
    <progress
      id='file-load-progress'
      max='100'
      value={`${progress}`}
      className='progress'
    />
    {progress !== 100 && <button onClick={onCancel}>Cancel</button>}
  </div>
)
