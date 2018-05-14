import React from 'react';
import 'tachyons/css/tachyons.min.css';

import { FilePicker, HashSelector, FileDetailsContainer } from './components';
import github from './assets/github.svg';

export class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      file: undefined,
      hashType: '',
      progress: 100
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

  setProgress = (progress) => {
    this.setState({ progress });
  }

  render() {
    const { file, hashType, progress } = this.state;
    const disabled = progress !== 100 && progress !== -1;
    return (
      <div className='flex flex-column w-80 mw8 vh-100 center pv4'>
        <div className='flex flex-auto flex-column'>
          <FilePicker setFile={this.setFile} disabled={disabled} />
          <HashSelector hashType={hashType} setHashType={this.setHashType} disabled={disabled} />
          {file &&
            <FileDetailsContainer hashType={hashType} file={file} progress={progress}
              onProgress={this.setProgress} />}
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