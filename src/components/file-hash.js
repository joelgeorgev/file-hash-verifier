import React, { useEffect, useRef } from 'react'
import Clipboard from 'clipboard'
import styled from 'styled-components'

import clippy from '../assets/clippy.svg'

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

export const FileHash = ({ hash }) => {
  const ref = useRef(null)

  useEffect(() => {
    const { current: element } = ref
    const clipboard = new Clipboard(element)
    return () => clipboard.destroy()
  }, [])

  return (
    <Wrapper>
      <Label>Hash:</Label>
      <HashWrapper>
        <TextInput type='text' id='hash' value={hash} readOnly />
        <Button ref={ref} data-clipboard-target='#hash'>
          <Image src={clippy} alt='Copy to clipboard' />
        </Button>
      </HashWrapper>
    </Wrapper>
  )
}
