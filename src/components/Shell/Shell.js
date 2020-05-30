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
  handleSelectHashType,
  handleCancelFileLoad
}) => {
  const reading = progress !== 100 && progress !== -1
  const disabled = reading || loading

  return (
    <Wrapper>
      <FilePicker onChange={handleSelectFile} disabled={disabled} />
      <HashSelector
        hashType={hashType}
        onChange={handleSelectHashType}
        disabled={disabled}
      />
      {reading && (
        <FileLoader progress={progress} onCancel={handleCancelFileLoad} />
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
