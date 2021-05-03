import { take, put, call, race, SagaReturnType } from 'redux-saga/effects'

import { createFileReadChannel, FileReadEvent } from './createFileReadChannel'
import {
  CANCEL_FILE_LOAD,
  selectFile,
  fileLoaded,
  fileLoadProgress
} from '../actions'

export const loadFile = function* (action: ReturnType<typeof selectFile>) {
  const { file } = action.payload

  const fileReadChannel: SagaReturnType<
    typeof createFileReadChannel
  > = yield call(createFileReadChannel, file)

  try {
    while (true) {
      const { channelOutput, cancelFileLoad } = yield race({
        channelOutput: take(fileReadChannel),
        cancelFileLoad: take(CANCEL_FILE_LOAD)
      })

      if (channelOutput) {
        const { arrayBuffer, progress, error } = channelOutput as FileReadEvent

        if (arrayBuffer) {
          yield put(fileLoaded(arrayBuffer))
          return
        }

        if (error) {
          console.error('Error during file read operation: ', error)
          return
        }

        if (progress !== undefined) {
          yield put(fileLoadProgress(progress))
        }
      } else if (cancelFileLoad) {
        fileReadChannel.close()
      }
    }
  } finally {
    fileReadChannel.close()
  }
}
