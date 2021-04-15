import { connect } from 'react-redux'

import { Shell } from '../../components'
import { selectFile, cancelFileLoad, selectHashType } from '../../actions'

const mapStateToProps = (state) => ({
  file: state.file,
  fileLoadProgress: state.fileLoadProgress,
  arrayBuffer: state.arrayBuffer,
  hashType: state.hashType,
  isCalculatingHash: state.isCalculatingHash,
  hash: state.hash
})

const mapDispatchToProps = (dispatch) => ({
  handleSelectFile: (e) => {
    const files =
      e.dataTransfer && e.dataTransfer.files
        ? e.dataTransfer.files
        : e.target.files
    if (files.length) {
      dispatch(selectFile(files[0]))
    }
    e.target.value = null
  },
  handleCancelFileLoad: () => dispatch(cancelFileLoad()),
  handleSelectHashType: (hashType) => dispatch(selectHashType(hashType))
})

export const ShellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shell)
