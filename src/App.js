import React, { Component } from 'react';
import FilePicker from './components/file-picker';
import HashSelector from './components/hash-selector';
import FileDetails from './components/file-details';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: undefined,
      hashType: 'sha-1'
    }
  }

  setFile(e) {
    const file = e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files[0] : e.target.files[0];
    this.setState({
      file: file
    });
  }

  setHashType(e) {
    const hashType = e.target.value;
    this.setState({
      hashType: hashType
    });
  }

  render() {
    return (
      <div className='flex flex-column justify-center ma4'>
        <FilePicker setFile={this.setFile.bind(this)} />
        {this.state.file ?
          <div>
            <HashSelector hashType={this.state.hashType} setHashType={this.setHashType.bind(this)} />
            <FileDetails file={this.state.file} />
          </div>
          :
          ''}
      </div>
    );
  }
}

export default App;