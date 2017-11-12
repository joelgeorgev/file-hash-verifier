import React from 'react';

export class FileDetails extends React.PureComponent {
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