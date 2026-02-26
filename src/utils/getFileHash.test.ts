import { MockedFunction, Mock } from 'vitest'

import { getFileHash } from './getFileHash.ts'
import { getCrypto } from './getCrypto.ts'

vi.mock('./getCrypto.ts')

const mockGetCrypto = getCrypto as Mock

type Digest = (
  hashType: string,
  arrayBuffer: ArrayBuffer
) => Promise<ArrayBuffer>

describe('getFileHash', () => {
  test('returns the file hash', async () => {
    const hashBuffer = new ArrayBuffer(2)
    const hash = '0000'

    const digest: MockedFunction<Digest> = vi.fn().mockResolvedValue(hashBuffer)
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
