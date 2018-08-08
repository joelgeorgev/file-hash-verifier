import React from 'react'

export class FileDetails extends React.PureComponent {
  render() {
    const { name, size } = this.props.file
    return (
      <div className='mt4'>
        <div>
          <label className='b'>Name: </label>
          <label>{name}</label>
        </div>
        <div>
          <label className='b'>Size: </label>
          <label>{size} bytes</label>
        </div>
      </div>
    )
  }
}