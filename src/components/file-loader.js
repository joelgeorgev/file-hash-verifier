import React from 'react';

export class FileLoader extends React.PureComponent {
  render() {
    return (
      <div className='flex justify-center mt4 b'>
        {this.props.fileLoadStatus === -1 ?
          <label>File load cancelled.</label>
          :
          <div>
            <label>Loading file: {this.props.fileLoadStatus}%</label>
            <button className='ml2' onClick={this.props.cancelLoad}>Cancel</button>
          </div>
        }
      </div>
    );
  }
}