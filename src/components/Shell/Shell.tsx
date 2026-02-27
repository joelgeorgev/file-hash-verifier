import { FilePicker } from '../FilePicker/FilePicker.tsx'
import { HashSelector } from '../HashSelector/HashSelector.tsx'
import { FileLoader } from '../FileLoader/FileLoader.tsx'
import { FileDetails } from '../FileDetails/FileDetails.tsx'
import { HashLoader } from '../HashLoader/HashLoader.tsx'
import { FileHash } from '../FileHash/FileHash.tsx'
import { HashVerifier } from '../HashVerifier/HashVerifier.tsx'
import { useSelector, useDispatch } from '../../hooks/index.ts'
import {
  selectFile,
  cancelFileLoad,
  selectHashType
} from '../../actions/index.ts'

import './Shell.css'

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

  const isDisabled = Boolean(fileLoadProgress) || isCalculatingHash

  return (
    <div className='shell'>
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
          {file && <FileDetails name={file.name} size={file.size} />}
          {isCalculatingHash && <HashLoader />}
          {hash && (
            <>
              <FileHash hash={hash} />
              <HashVerifier hash={hash} />
            </>
          )}
        </>
      )}
    </div>
  )
}
