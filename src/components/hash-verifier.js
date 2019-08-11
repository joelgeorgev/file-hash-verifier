import React, { useState } from 'react'
import styled from 'styled-components'

import success from '../assets/success.svg'
import fail from '../assets/fail.svg'

const Wrapper = styled.div`
  margin-top: 2rem;
`

const Checkbox = styled.input`
  cursor: pointer;
`

const Label = styled.label`
  margin-left: 0.5rem;
  font-weight: 700;
`

const VerifyWrapper = styled.div`
  display: flex;
`

const TextInput = styled.input`
  width: 100%;
  padding: 0 0.25rem;
  border: 1px solid #aaa;
  border-right: 0;
`

const Image = styled.img`
  width: 2rem;
  border: 1px solid #aaa;
`

export const HashVerifier = ({ hash }) => {
  const [verify, setVerify] = useState(false)
  const [text, setText] = useState('')
  const [match, setMatch] = useState(false)

  const toggleVerify = (e) => setVerify(e.target.checked)

  const verifyHash = (e) => {
    const inputText = e.target.value
    setText(inputText)
    setMatch(hash === inputText.replace(/ /g, '').toLowerCase())
  }

  return (
    <Wrapper>
      <div>
        <Checkbox type='checkbox' checked={verify} onChange={toggleVerify} />
        <Label>Compare with:</Label>
      </div>
      {verify && (
        <VerifyWrapper>
          <TextInput type='text' value={text} onChange={verifyHash} />
          <Image
            src={match ? success : fail}
            alt={match ? 'Success' : 'Fail'}
          />
        </VerifyWrapper>
      )}
    </Wrapper>
  )
}
