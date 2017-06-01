import React, { Component } from 'react';
import prettyBytes from 'pretty-bytes';

class FileDetails extends Component {
  render() {
    return (
      <div className='mt4'>
        <div>
          Name : <label className='b'>{this.props.file.name}</label>
        </div>
        <div>
          Size : <label>{prettyBytes(this.props.file.size)}</label>
        </div>
      </div>
    );
  }
}

export default FileDetails;