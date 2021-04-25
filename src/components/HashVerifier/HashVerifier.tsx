import { useState, ChangeEvent } from 'react'
import styled from 'styled-components'

import type { Hash } from '../../types'

import success from '../../assets/success.svg'
import fail from '../../assets/fail.svg'

interface Props {
  hash: Hash
}

interface StyleProps {
  value: string
}

const Wrapper = styled.div`
  margin-top: 2rem;
`

const Label = styled.label`
  font-weight: 700;
`

const VerifyWrapper = styled.div`
  display: flex;
  height: 2rem;
`

const TextInput = styled.input<StyleProps>`
  width: 100%;
  padding: 0 0.25rem;
  border: 1px solid #aaa;
  ${({ value }) => value && `border-right: 0;`}
`

const Image = styled.img`
  width: 2rem;
  border: 1px solid #aaa;
`

export const HashVerifier = ({ hash }: Props) => {
  const [text, setText] = useState<string>('')
  const [isMatch, setMatch] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputText = event.target.value

    setText(inputText)
    setMatch(hash === inputText.replace(/ /g, '').toLowerCase())
  }

  return (
    <Wrapper>
      <Label htmlFor='hash-verify'>Compare with:</Label>
      <VerifyWrapper>
        <TextInput
          type='text'
          id='hash-verify'
          value={text}
          onChange={handleChange}
        />
        {text && (
          <Image
            src={isMatch ? success : fail}
            alt={isMatch ? 'Hashes match' : 'Hashes do not match'}
          />
        )}
      </VerifyWrapper>
    </Wrapper>
  )
}
