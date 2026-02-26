import { END } from 'redux-saga'
import { call, race, take, SagaReturnType } from 'redux-saga/effects'

import {
  createFileReadChannel,
  FileReadEvent
} from './createFileReadChannel.ts'
import { processFileReadEvent } from './processFileReadEvent.ts'
import {
  CANCEL_FILE_LOAD,
  selectFile,
  cancelFileLoad
} from '../actions/index.ts'

export interface RaceYield {
  channelOutput: FileReadEvent | END
  cancelFileLoad: ReturnType<typeof cancelFileLoad>
}

export const loadFile = function* (action: ReturnType<typeof selectFile>) {
  const { file } = action.payload

  const fileReadChannel: SagaReturnType<typeof createFileReadChannel> =
    yield call(createFileReadChannel, file)

  try {
    while (true) {
      const { channelOutput, cancelFileLoad }: RaceYield = yield race({
        channelOutput: take(fileReadChannel),
        cancelFileLoad: take(CANCEL_FILE_LOAD)
      })

      if (cancelFileLoad) {
        break
      }

      yield call(processFileReadEvent, channelOutput as FileReadEvent)
    }
  } finally {
    fileReadChannel.close()
  }
}
