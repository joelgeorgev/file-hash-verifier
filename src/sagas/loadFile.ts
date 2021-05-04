import { call, race, take, SagaReturnType } from 'redux-saga/effects'

import { createFileReadChannel, FileReadEvent } from './createFileReadChannel'
import { processFileReadEvent } from './processFileReadEvent'
import { CANCEL_FILE_LOAD, selectFile } from '../actions'

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
        yield call(processFileReadEvent, channelOutput as FileReadEvent)
      } else if (cancelFileLoad) {
        fileReadChannel.close()
      }
    }
  } finally {
    fileReadChannel.close()
  }
}
