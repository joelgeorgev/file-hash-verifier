import { connect } from 'react-redux'

import { Shell } from '../../components'
import { selectFile, cancelFileLoad, selectHashType } from '../../actions'
import * as selectors from '../../reducers'

const mapStateToProps = (state) => ({
  file: selectors.getFile(state),
  fileLoadProgress: selectors.getFileLoadProgress(state),
  arrayBuffer: selectors.getArrayBuffer(state),
  hashType: selectors.getHashType(state),
  isCalculatingHash: selectors.getCalculatingHash(state),
  hash: selectors.getHash(state)
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
  handleSelectHashType: (e) => dispatch(selectHashType(e.target.value))
})

export const ShellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shell)
