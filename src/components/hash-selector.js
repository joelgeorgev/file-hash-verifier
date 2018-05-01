import React from 'react';

export class HashSelector extends React.PureComponent {
  render() {
    const { hashType, setHashType } = this.props;
    return (
      <div className='flex justify-center mt4 b'>
        <input type='radio' name='hash-type' value='sha-1' checked={'sha-1' === hashType}
          className='mh2' onChange={setHashType} />SHA-1
        <input type='radio' name='hash-type' value='sha-256' checked={'sha-256' === hashType}
          className='mh2' onChange={setHashType} />SHA-256
        <input type='radio' name='hash-type' value='sha-384' checked={'sha-384' === hashType}
          className='mh2' onChange={setHashType} />SHA-384
        <input type='radio' name='hash-type' value='sha-512' checked={'sha-512' === hashType}
          className='mh2' onChange={setHashType} />SHA-512
      </div>
    );
  }
}