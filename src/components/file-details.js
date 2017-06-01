import React, { Component } from 'react';

class FileDetails extends Component {
  render() {
    return (
      <div className='mt4'>
        <div>
          <label className='b'>Name: </label>
          <label>{this.props.file.name}</label>
        </div>
        <div>
          <label className='b'>Size: </label>
          <label>{this.props.file.size} bytes</label>
        </div>
      </div>
    );
  }
}

export default FileDetails;