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
      progress: 100,
      loading: false
    }
  }

  setFile = (e) => {
    const files = e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files : e.target.files;
    if (files.length) {
      this.setState({
        file: files[0]
      });
    }
    e.target.value = null;
  }

  setHashType = (e) => {
    if (this.state.file) {
      this.setState({ loading: true });
    }
    this.setState({
      hashType: e.target.value
    });
  }

  setProgress = (progress) => {
    if (progress === 100) {
      this.setState({ loading: true });
    }
    if (progress === -1) {
      this.setState({ file: undefined });
    }
    this.setState({ progress });
  }

  disableLoading = () => {
    this.setState({ loading: false });
  }

  render() {
    const { file, hashType, progress, loading } = this.state;
    const disabled = (progress !== 100 && progress !== -1) || loading;
    return (
      <div className='flex flex-column w-80 mw8 vh-100 center pv4'>
        <div className='flex flex-auto flex-column'>
          <FilePicker onChange={this.setFile} disabled={disabled} />
          <HashSelector hashType={hashType} onChange={this.setHashType} disabled={disabled} />
          {file &&
            <FileDetailsContainer file={file} hashType={hashType} progress={progress}
              loading={loading} onFileRead={this.setProgress} onHashCompletion={this.disableLoading} />}
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