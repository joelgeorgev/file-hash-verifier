import { connect } from 'react-redux'

import { Shell } from '../components'
import { setFile, setHashType, cancelFileRead } from '../actions'

const mapStateToProps = (state) => {
  return {
    file: state.file,
    arrayBuffer: state.arrayBuffer,
    hashType: state.hashType,
    progress: state.progress,
    loading: state.loading,
    hash: state.hash
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFile: (e) => {
      const files =
        e.dataTransfer && e.dataTransfer.files
          ? e.dataTransfer.files
          : e.target.files
      if (files.length) {
        dispatch(setFile(files[0]))
      }
      e.target.value = null
    },
    setHashType: (e) => dispatch(setHashType(e.target.value)),
    cancelFileRead: () => dispatch(cancelFileRead())
  }
}

export const ShellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shell)
