import React, { Component } from 'react';

export class FilePicker extends Component {

  onDragOver = (e) => {
    e.preventDefault();
  }

  onDragLeave = (e) => {
    e.preventDefault();
  }

  onDrop = (e) => {
    e.preventDefault();
    this.props.setFile(e);
  }

  render() {
    return (
      <div className='flex flex-column justify-center h4 ba b--dashed b--light-silver'
        onDragOver={this.onDragOver} onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}>
        <label htmlFor='file-picker' className='self-center pointer b'>Drop your file here or click to pick one.</label>
        <input type='file' id='file-picker' multiple={false} className='dn' onChange={this.props.setFile} />
      </div>);
  }
}