import React from 'react';

export class FilePicker extends React.PureComponent {

  onDragOver = (e) => {
    e.preventDefault();
  }

  onDragLeave = (e) => {
    e.preventDefault();
  }

  onDrop = (e) => {
    e.preventDefault();
    const { disabled, setFile } = this.props;
    if (!disabled) {
      setFile(e);
    }
  }

  render() {
    const { disabled, setFile } = this.props;
    return (
      <div className='flex flex-column justify-center h4 ba b--dashed b--light-silver'
        onDragOver={this.onDragOver} onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}>
        <label htmlFor='file-picker' className='self-center pointer b'>Drop your file here or click to pick one.</label>
        <input type='file' id='file-picker' multiple={false} className='dn' onChange={setFile}
          disabled={disabled} />
      </div>);
  }
}