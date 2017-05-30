import React, { Component } from 'react';

class FileLoader extends Component {

  render() {
    return (
      <div className='flex justify-center mt4'>
        {this.props.fileLoadStatus !== 100 ?
          `Loading file : ${this.props.fileLoadStatus}%`
          :
          'Load complete.'}
      </div>
    );
  }
}

export default FileLoader;