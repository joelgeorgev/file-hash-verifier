import React, { Component } from 'react';
import FilePicker from './components/file-picker';
import HashSelector from './components/hash-selector';
import FileDetailsContainer from './components/file-details-container';
import github from './assets/github.svg';
import 'tachyons/css/tachyons.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: undefined,
      hashType: 'sha-1'
    }
  }

  setFile(e) {
    const files = e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files : e.target.files;
    if (files.length) {
      this.setState({
        file: files[0]
      });
    }
  }

  setHashType(e) {
    this.setState({
      hashType: e.target.value
    });
  }

  render() {
    return (
      <div className='flex flex-column vh-100 mh4 pv4'>
        <div className='flex flex-auto flex-column'>
          <FilePicker setFile={this.setFile.bind(this)} />
          <HashSelector hashType={this.state.hashType} setHashType={this.setHashType.bind(this)} />
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

export default App;