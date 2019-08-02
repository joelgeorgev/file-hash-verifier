import React from 'react'

import {
  FilePicker,
  HashSelector,
  FileLoader,
  FileDetails,
  HashLoader,
  FileHash,
  HashVerifier
} from '.'

export const Shell = ({
  file,
  arrayBuffer,
  hashType,
  progress,
  loading,
  hash,
  setFile,
  setHashType,
  cancelFileRead
}) => {
  const reading = progress !== 100 && progress !== -1
  const disabled = reading || loading

  return (
    <div className='flex flex-column w-80 center'>
      <div className='flex flex-auto flex-column'>
        <FilePicker onChange={setFile} disabled={disabled} />
        <HashSelector
          hashType={hashType}
          onChange={setHashType}
          disabled={disabled}
        />
        {reading && (
          <FileLoader progress={progress} cancelFileRead={cancelFileRead} />
        )}
        {arrayBuffer && (
          <>
            <FileDetails file={file} />
            {loading && <HashLoader />}
            {hash && (
              <>
                <FileHash hash={hash} />
                <HashVerifier hash={hash} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
