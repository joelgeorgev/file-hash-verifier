import React, { Component } from 'react';

export class HashSelector extends Component {
  render() {
    return (
      <div className='flex justify-center mt4 b'>
        <input type='radio' name='hash-type' value='sha-1' checked={'sha-1' === this.props.hashType}
          className='mh2' onChange={this.props.setHashType} />SHA-1
        <input type='radio' name='hash-type' value='sha-256' checked={'sha-256' === this.props.hashType}
          className='mh2' onChange={this.props.setHashType} />SHA-256
        <input type='radio' name='hash-type' value='sha-384' checked={'sha-384' === this.props.hashType}
          className='mh2' onChange={this.props.setHashType} />SHA-384
        <input type='radio' name='hash-type' value='sha-512' checked={'sha-512' === this.props.hashType}
          className='mh2' onChange={this.props.setHashType} />SHA-512
      </div>
    );
  }
}