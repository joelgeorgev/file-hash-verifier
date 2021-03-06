import styled from 'styled-components'

import type { FileName, FileSize } from '../../types'

interface Props {
  name: FileName
  size: FileSize
}

const Wrapper = styled.dl`
  margin-top: 2rem;
`

const Key = styled.dt`
  font-weight: 700;
`

const Value = styled.dd`
  word-break: break-all;
  margin-bottom: 0.5rem;
`

export const FileDetails = ({ name, size }: Props) => (
  <Wrapper>
    <Key>Name</Key>
    <Value>{name}</Value>
    <Key>Size</Key>
    <Value>{size} bytes</Value>
  </Wrapper>
)
