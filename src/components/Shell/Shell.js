import React from 'react'
import styled from 'styled-components'

import {
  FilePicker,
  HashSelector,
  FileLoader,
  FileDetails,
  HashLoader,
  FileHash,
  HashVerifier
} from '..'

const Wrapper = styled.div`
  margin: 0 auto;
`

export const Shell = ({
  file,
  arrayBuffer,
  hashType,
  progress,
  loading,
  hash,
  handleSelectFile,
  setHashType,
  cancelFileRead
}) => {
  const reading = progress !== 100 && progress !== -1
  const disabled = reading || loading

  return (
    <Wrapper>
      <FilePicker onChange={handleSelectFile} disabled={disabled} />
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
    </Wrapper>
  )
}
