import { getFileHash } from './getFileHash'
import { getCrypto } from './getCrypto'

jest.mock('./getCrypto')

const mockGetCrypto = getCrypto as jest.Mock

describe('getFileHash', () => {
  test('returns the file hash', async () => {
    const hashBuffer = new ArrayBuffer(2)
    const hash = '0000'

    const digest = jest.fn().mockResolvedValue(hashBuffer)
    mockGetCrypto.mockReturnValue({ subtle: { digest } })

    const arrayBuffer = new ArrayBuffer(1)
    const hashType = 'sha-512'

    const result = await getFileHash(arrayBuffer, hashType)

    expect(mockGetCrypto).toHaveBeenCalledTimes(1)
    expect(mockGetCrypto).toHaveBeenCalledWith()

    expect(digest).toHaveBeenCalledTimes(1)
    expect(digest).toHaveBeenCalledWith(hashType, arrayBuffer)

    expect(result).toEqual(hash)
  })
})
