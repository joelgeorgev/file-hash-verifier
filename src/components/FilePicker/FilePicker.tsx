import './FilePicker.css'
interface Props {
  isDisabled: boolean
  onSelect: (file: File) => void
}

export const FilePicker = ({ isDisabled, onSelect }: Props) => (
  <div className='file-picker'>
    <label htmlFor='file-picker' className='label'>
      Click to pick a file.
    </label>
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
  </div>
)
