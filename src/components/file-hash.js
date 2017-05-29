import React, { Component } from 'react';
import Clipboard from 'clipboard';
import clippy from '../assets/clippy.svg';

class FileHash extends Component {

  constructor(props) {
    super(props);
    new Clipboard('#btn');
  }

  render() {
    return (
      <div className='mv4'>
        Hash :
        <div className='flex h2'>
          {this.props.loading ?
            <input id='hash' className='w-90 ph1 bt br-0 bb bl b--light-silver' type='text'
              readOnly placeholder='Calculating Hash...' value='' />
            :
            <input id='hash' className='w-90 ph1 bt br-0 bb bl b--light-silver' type='text'
              readOnly placeholder='Calculating Hash...' value={this.props.hash} />}
          <button id='btn' className='bg-transparent ba b--light-silver pointer' data-clipboard-target='#hash'>
            <img src={clippy} className='w1' alt='Copy to clipboard' />
          </button>
        </div>
      </div>
    );
  }
}

export default FileHash;