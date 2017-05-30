import React, { Component } from 'react';

class FilePicker extends Component {

  onDragOver(e) {
    e.preventDefault();
  }

  onDragLeave(e) {
    e.preventDefault();
  }

  onDrop(e) {
    e.preventDefault();
    this.props.setFile(e);
  }

  render() {
    return (
      <div className='h3 lh-copy ba b--light-silver tc' onDragOver={this.onDragOver.bind(this)}
        onDragLeave={this.onDragLeave.bind(this)} onDrop={this.onDrop.bind(this)}>
        <label htmlFor='file-picker' className='pointer'>Drop your file here or click to pick one.</label>
        <input type='file' id='file-picker' multiple={false} className='dn' onChange={this.props.setFile} />
      </div>);
  }
}

export default FilePicker;