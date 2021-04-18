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
  const isDisabled = fileLoadProgress || isCalculatingHash

  return (
    <Wrapper>
      <FilePicker isDisabled={isDisabled} onSelect={handleSelectFile} />
      <HashSelector
        hashType={hashType}
        isDisabled={isDisabled}
        onSelect={handleSelectHashType}
      />
      {fileLoadProgress && (
        <FileLoader
          progress={fileLoadProgress}
          onCancel={handleCancelFileLoad}
        />
      )}
      {arrayBuffer && (
        <>
          <FileDetails name={file.name} size={file.size} />
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
