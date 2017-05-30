import React, { Component } from 'react';

class HashSelector extends Component {
  render() {
    return (
      <div className='flex flex-row justify-center mv4'>
        <input className='mh2' type='radio' name='hash-type' value='sha-1'
          checked={'sha-1' === this.props.hashType} onChange={this.props.setHashType} />SHA-1
        <input className='mh2' type='radio' name='hash-type' value='sha-256'
          checked={'sha-256' === this.props.hashType} onChange={this.props.setHashType} />SHA-256
        <input className='mh2' type='radio' name='hash-type' value='sha-384'
          checked={'sha-384' === this.props.hashType} onChange={this.props.setHashType} />SHA-384
        <input className='mh2' type='radio' name='hash-type' value='sha-512'
          checked={'sha-512' === this.props.hashType} onChange={this.props.setHashType} />SHA-512
      </div>
    );
  }
}

export default HashSelector;