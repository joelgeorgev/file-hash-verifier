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

  describe('getFileLoadStatus', () => {
    const { getFileLoadStatus } = selectors

    test('selects file load status from state', () => {
      const fileLoadStatus = 90

      expect(getFileLoadStatus({ fileLoadStatus })).toEqual(fileLoadStatus)
    })
  })

  describe('isCalculatingHash', () => {
    const { isCalculatingHash } = selectors

    test('selects calculating hash from state', () => {
      const calculatingHash = true

      expect(isCalculatingHash({ calculatingHash })).toEqual(calculatingHash)
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
