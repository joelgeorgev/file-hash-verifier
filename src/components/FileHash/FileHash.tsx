import copy from 'clipboard-copy'
import styled from 'styled-components'

import { Hash } from '../../types'

import clippy from '../../assets/clippy.svg'

interface Props {
  hash: Hash
}

const Wrapper = styled.div`
  margin-top: 2rem;
`

const Label = styled.label`
  font-weight: 700;
`

const HashWrapper = styled.div`
  display: flex;
  height: 2rem;
`

const TextInput = styled.input`
  width: 100%;
  padding: 0 0.25rem;
  border: 1px solid #aaa;
  border-right: 0;
`

const Button = styled.button`
  border: 1px solid #aaa;
  width: 2rem;
  background-color: transparent;
  cursor: pointer;
`

const Image = styled.img`
  max-width: 100%;
`

export const FileHash = ({ hash }: Props) => (
  <Wrapper>
    <Label htmlFor='hash'>Hash:</Label>
    <HashWrapper>
      <TextInput type='text' id='hash' value={hash} readOnly />
      <Button onClick={() => copy(hash)}>
        <Image src={clippy} alt='Copy to clipboard' />
      </Button>
    </HashWrapper>
  </Wrapper>
)
