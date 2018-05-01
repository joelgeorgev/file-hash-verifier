import React from 'react';

export class FileLoader extends React.PureComponent {
  render() {
    const { fileLoadStatus, cancelLoad } = this.props;
    return (
      <div className='flex justify-center mt4 b'>
        {fileLoadStatus === -1 ?
          <label>File load cancelled.</label>
          :
          <div>
            <label>Loading file: {fileLoadStatus}%</label>
            <button className='ml2' onClick={cancelLoad}>Cancel</button>
          </div>
        }
      </div>
    );
  }
}