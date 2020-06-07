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
  fileLoadProgress,
  arrayBuffer,
  hashType,
  isCalculatingHash,
  hash,
  handleSelectFile,
  handleCancelFileLoad,
  handleSelectHashType
}) => {
  const disabled = fileLoadProgress || isCalculatingHash

  return (
    <Wrapper>
      <FilePicker onChange={handleSelectFile} disabled={disabled} />
      <HashSelector
        hashType={hashType}
        onChange={handleSelectHashType}
        disabled={disabled}
      />
      {fileLoadProgress && (
        <FileLoader
          progress={fileLoadProgress}
          onCancel={handleCancelFileLoad}
        />
      )}
      {arrayBuffer && (
        <>
          <FileDetails file={file} />
          {isCalculatingHash && <HashLoader />}
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
