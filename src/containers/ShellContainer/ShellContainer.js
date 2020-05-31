import { connect } from 'react-redux'

import { Shell } from '../../components'
import { selectFile, selectHashType, cancelFileLoad } from '../../actions'
import * as selectors from '../../reducers'

const mapStateToProps = (state) => ({
  file: selectors.getFile(state),
  arrayBuffer: selectors.getArrayBuffer(state),
  hashType: selectors.getHashType(state),
  fileLoadStatus: selectors.getFileLoadStatus(state),
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
  handleSelectHashType: (e) => dispatch(selectHashType(e.target.value)),
  handleCancelFileLoad: () => dispatch(cancelFileLoad())
})

export const ShellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shell)
