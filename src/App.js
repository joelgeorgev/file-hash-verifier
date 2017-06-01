import React, { Component } from 'react';
import FilePicker from './components/file-picker';
import HashSelector from './components/hash-selector';
import FileDetailsContainer from './components/file-details-container';

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
      <div className='flex flex-column justify-center ma4'>
        <FilePicker setFile={this.setFile.bind(this)} />
        <HashSelector hashType={this.state.hashType} setHashType={this.setHashType.bind(this)} />
        {this.state.file ?
          <FileDetailsContainer hashType={this.state.hashType} file={this.state.file} />
          :
          ''}
      </div>
    );
  }
}

export default App;