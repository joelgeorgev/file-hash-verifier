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

  async hash(arrayBuffer, hashType) {
    const hashBuffer = await crypto.subtle.digest(hashType, arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
  }

  calculateHash(file, hashType) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result;
        resolve(this.hash(arrayBuffer, hashType));
      };
      reader.onerror = (err) => { reject(err); }
      reader.readAsArrayBuffer(file);
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