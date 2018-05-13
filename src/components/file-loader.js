import React from 'react';

export class FileLoader extends React.PureComponent {
  render() {
    const { progress, cancelLoad } = this.props;
    return (
      <div className='flex justify-center mt4 b'>
        {progress === -1 ?
          <label>File load cancelled.</label>
          :
          <div>
            <label>Loading file: {progress}%</label>
            <button className='ml2' onClick={cancelLoad}>Cancel</button>
          </div>
        }
      </div>
    );
  }
}