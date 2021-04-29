import styled from 'styled-components'

interface Props {
  isDisabled: boolean
  onSelect: (file: File) => void
}

const Label = styled.label`
  display: block;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const FilePicker = ({ isDisabled, onSelect }: Props) => (
  <>
    <Label htmlFor='file-picker'>Click to pick a file.</Label>
    <input
      type='file'
      id='file-picker'
      multiple={false}
      disabled={isDisabled}
      onChange={(event) => {
        const { files } = event.target

        if (files && files.length) {
          onSelect(files[0])
        }
      }}
    />
  </>
)
