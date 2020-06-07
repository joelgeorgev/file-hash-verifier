import * as selectors from '.'

describe('Selectors', () => {
  describe('getFile', () => {
    const { getFile } = selectors

    test('selects file', () => {
      const file = new File(['Hello World'], 'robots.txt', {
        type: 'text/plain'
      })

      expect(getFile({ file })).toEqual(file)
    })
  })

  describe('getFileLoadProgress', () => {
    const { getFileLoadProgress } = selectors

    test('selects file load progress', () => {
      const fileLoadProgress = 90

      expect(getFileLoadProgress({ fileLoadProgress })).toEqual(
        fileLoadProgress
      )
    })
  })

  describe('getArrayBuffer', () => {
    const { getArrayBuffer } = selectors

    test('selects array buffer', () => {
      const arrayBuffer = new ArrayBuffer(8)

      expect(getArrayBuffer({ arrayBuffer })).toEqual(arrayBuffer)
    })
  })

  describe('getHashType', () => {
    const { getHashType } = selectors

    test('selects hash type', () => {
      const hashType = 'sha-512'

      expect(getHashType({ hashType })).toEqual(hashType)
    })
  })

  describe('getCalculatingHash', () => {
    const { getCalculatingHash } = selectors

    test('selects calculating hash', () => {
      const isCalculatingHash = true

      expect(getCalculatingHash({ isCalculatingHash })).toEqual(
        isCalculatingHash
      )
    })
  })

  describe('getHash', () => {
    const { getHash } = selectors

    test('selects hash', () => {
      const hash = 'hash'

      expect(getHash({ hash })).toEqual(hash)
    })
  })
})
