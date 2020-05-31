import * as selectors from '.'

describe('Selectors', () => {
  describe('getFile', () => {
    const { getFile } = selectors

    test('selects file from state', () => {
      const file = new File(['Hello World'], 'robots.txt', {
        type: 'text/plain'
      })

      expect(getFile({ file })).toEqual(file)
    })
  })

  describe('getArrayBuffer', () => {
    const { getArrayBuffer } = selectors

    test('selects arrayBuffer from state', () => {
      const arrayBuffer = new ArrayBuffer(8)

      expect(getArrayBuffer({ arrayBuffer })).toEqual(arrayBuffer)
    })
  })

  describe('getHashType', () => {
    const { getHashType } = selectors

    test('selects hashType from state', () => {
      const hashType = 'sha-512'

      expect(getHashType({ hashType })).toEqual(hashType)
    })
  })

  describe('getFileLoadProgress', () => {
    const { getFileLoadProgress } = selectors

    test('selects file load progress from state', () => {
      const fileLoadProgress = 90

      expect(getFileLoadProgress({ fileLoadProgress })).toEqual(
        fileLoadProgress
      )
    })
  })

  describe('getCalculatingHash', () => {
    const { getCalculatingHash } = selectors

    test('selects calculating hash from state', () => {
      const isCalculatingHash = true

      expect(getCalculatingHash({ isCalculatingHash })).toEqual(
        isCalculatingHash
      )
    })
  })

  describe('getHash', () => {
    const { getHash } = selectors

    test('selects hash from state', () => {
      const hash = 'hash'

      expect(getHash({ hash })).toEqual(hash)
    })
  })
})
