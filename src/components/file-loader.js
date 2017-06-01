import React, { Component } from 'react';

class FileLoader extends Component {
  render() {
    return (
      <div className='flex justify-center mt4 b'>
        Loading file: {this.props.fileLoadStatus}%
      </div>
    );
  }
}

export default FileLoader;