import React from 'react';
import 'tachyons/css/tachyons.min.css';

import { FilePicker, HashSelector, FileDetailsContainer } from './components';
import github from './assets/github.svg';

export class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      file: undefined,
      hashType: 'sha-1'
    }
  }

  setFile = (e) => {
    const files = e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files : e.target.files;
    if (files.length) {
      this.setState({
        file: files[0]
      });
    }
  }

  setHashType = (e) => {
    this.setState({
      hashType: e.target.value
    });
  }

  render() {
    return (
      <div className='flex flex-column w-80 mw8 vh-100 center pv4'>
        <div className='flex flex-auto flex-column'>
          <FilePicker setFile={this.setFile} />
          <HashSelector hashType={this.state.hashType} setHashType={this.setHashType} />
          {this.state.file ?
            <FileDetailsContainer hashType={this.state.hashType} file={this.state.file} />
            :
            ''}
        </div>
        <div className='self-center'>
          <a href='https://github.com/joelgeorgev/file-hash-verifier'>
            <img src={github} alt='GitHub' />
          </a>
        </div>
      </div>
    );
  }
}