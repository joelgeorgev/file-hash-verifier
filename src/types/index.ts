export interface Action {
  type: string
}

export type FileName = File['name']
export type FileSize = File['size']
export type HashType = 'sha-1' | 'sha-256' | 'sha-384' | 'sha-512'
export type FileLoadProgress = number
export type Hash = string
