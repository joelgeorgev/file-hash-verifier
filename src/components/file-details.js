import React, { Component } from 'react';

class FileDetails extends Component {
  render() {
    return (
      <div className='mt4'>
        <div>
          Name : <label className='b'>{this.props.file.name}</label>
        </div>
        <div>
          Size : <label>{this.props.file.size} bytes</label>
        </div>
      </div>
    );
  }
}

export default FileDetails;