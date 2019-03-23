import React from 'react'

import {
  FilePicker, HashSelector, FileLoader, FileDetails,
  HashLoader, FileHash, HashVerifier
} from '.'

export const Shell = ({ file, arrayBuffer, hashType, progress,
  loading, hash, setFile, setHashType, cancelFileRead }) => {
  const reading = progress !== 100 && progress !== -1
  const disabled = reading || loading

  return (
    <div className='flex flex-column w-80 mw8 vh-100 center pv4'>
      <div className='flex flex-auto flex-column'>
        <FilePicker onChange={setFile} disabled={disabled} />
        <HashSelector hashType={hashType} onChange={setHashType} disabled={disabled} />
        {reading && <FileLoader progress={progress} cancelFileRead={cancelFileRead} />}
        {arrayBuffer &&
          <React.Fragment>
            <FileDetails file={file} />
            {loading && <HashLoader />}
            {hash &&
              <div>
                <FileHash hash={hash} />
                <HashVerifier hash={hash} />
              </div>}
          </React.Fragment>
        }
      </div>
    </div>
  )
}