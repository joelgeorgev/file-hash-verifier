import React from 'react';

export class FileLoader extends React.PureComponent {
  render() {
    const { progress, cancelLoad } = this.props;
    return (
      <div className='flex justify-center mt4 b'>
        <div>
          <label>Loading file: {progress}%</label>
          <button className='ml2' onClick={cancelLoad}>Cancel</button>
        </div>
      </div>
    );
  }
}