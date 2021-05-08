import { getCrypto } from './getCrypto'
import type { HashType } from '../types'

const toHexadecimal = (num: number): string => num.toString(16).padStart(2, '0')

export const getFileHash = async (
  arrayBuffer: ArrayBuffer,
  hashType: HashType
): Promise<string> => {
  const hashBuffer: ArrayBuffer = await getCrypto().subtle.digest(
    hashType,
    arrayBuffer
  )
  const byteArray: number[] = Array.from(new Uint8Array(hashBuffer))
  const hash = byteArray.map(toHexadecimal).join('')

  return hash
}
