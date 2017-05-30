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
            <input type='text' id='hash' placeholder='Calculating Hash...'
              value='' readOnly className='w-90 ph1 bt br-0 bb bl b--light-silver' />
            :
            <input type='text' id='hash' placeholder='Calculating Hash...'
              value={this.props.hash} readOnly className='w-90 ph1 bt br-0 bb bl b--light-silver' />}
          <button id='btn' data-clipboard-target='#hash'
            className='bg-transparent ba b--light-silver pointer'>
            <img src={clippy} alt='Copy to clipboard' className='w1' />
          </button>
        </div>
      </div>
    );
  }
}

export default FileHash;