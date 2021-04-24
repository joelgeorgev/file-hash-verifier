import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import { selectFile, cancelFileLoad, selectHashType } from '../../actions'

const Wrapper = styled.div`
  margin: 0 auto;
`

export const Shell = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const {
    file,
    fileLoadProgress,
    arrayBuffer,
    hashType,
    isCalculatingHash,
    hash
  } = state

  const isDisabled = fileLoadProgress || isCalculatingHash

  return (
    <Wrapper>
      <FilePicker
        isDisabled={isDisabled}
        onSelect={(file) => dispatch(selectFile(file))}
      />
      <HashSelector
        hashType={hashType}
        isDisabled={isDisabled}
        onSelect={(hashType) => dispatch(selectHashType(hashType))}
      />
      {fileLoadProgress && (
        <FileLoader
          progress={fileLoadProgress}
          onCancel={() => dispatch(cancelFileLoad())}
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
