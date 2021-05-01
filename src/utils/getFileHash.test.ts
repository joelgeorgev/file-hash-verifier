import { getFileHash } from './getFileHash'

const crypto = window.crypto

const hashBuffer = new ArrayBuffer(2)
const hash = '0000'

const setupCrypto = () => {
  Object.defineProperty(window, 'crypto', {
    writable: true,
    value: {
      subtle: {
        digest: jest.fn().mockResolvedValue(hashBuffer)
      }
    }
  })
}

const restoreCrypto = () => {
  Object.defineProperty(window, 'crypto', {
    value: crypto
  })
}

describe('getFileHash', () => {
  test('returns the file hash', async () => {
    setupCrypto()

    const arrayBuffer = new ArrayBuffer(1)
    const hashType = 'sha-512'

    const result = await getFileHash(arrayBuffer, hashType)

    expect(window.crypto.subtle.digest).toHaveBeenCalledTimes(1)
    expect(window.crypto.subtle.digest).toHaveBeenCalledWith(
      hashType,
      arrayBuffer
    )

    expect(result).toEqual(hash)

    restoreCrypto()
  })
})
