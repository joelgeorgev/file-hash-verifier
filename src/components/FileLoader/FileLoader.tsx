import styled from 'styled-components'

interface Props {
  progress: number
  onCancel: () => void
}

const Wrapper = styled.div`
  margin-top: 2rem;
  font-weight: 700;
  text-align: center;
`

const Progress = styled.progress`
  margin: 0 1rem;
`

export const FileLoader = ({ progress, onCancel }: Props) => (
  <Wrapper>
    <label htmlFor='file-load-progress'>Loading file:</label>
    <Progress id='file-load-progress' max='100' value={`${progress}`} />
    {progress !== 100 && <button onClick={onCancel}>Cancel</button>}
  </Wrapper>
)
