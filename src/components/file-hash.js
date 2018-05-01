import React from 'react';
import Clipboard from 'clipboard';

import clippy from '../assets/clippy.svg';

export class FileHash extends React.PureComponent {

  constructor(props) {
    super(props);
    new Clipboard('#btn');
  }

  render() {
    const { hash } = this.props;
    return (
      <div className='mt4'>
        <label className='b'>Hash:</label>
        <div className='flex h2'>
          <input type='text' id='hash' placeholder='Calculating Hash...' value={hash}
            readOnly className='w-100 ph1 bt br-0 bb bl b--light-silver' />
          <button id='btn' data-clipboard-target='#hash'
            className='bg-transparent ba b--light-silver pointer'>
            <img src={clippy} alt='Copy to clipboard' className='w1' />
          </button>
        </div>
      </div>
    );
  }
}