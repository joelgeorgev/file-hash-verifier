import React, { Component } from 'react';
import FilePicker from './components/file-picker';
import HashSelector from './components/hash-selector';
import FileDetails from './components/file-details';
import FileHash from './components/file-hash';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: undefined,
      hashType: 'sha-1',
      loading: false,
      hash: undefined
    }
  }

  async setFile(e) {
    const files = e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files : e.target.files;
    if (files.length) {
      this.setState({
        file: files[0],
        loading: true
      });
      try {
        const hash = await this.calculateHash(this.state.hashType, files[0]);
        this.setState({
          loading: false,
          hash: hash
        });
      } catch (err) {
        console.error('Error', err);
      }
    }
  }

  async setHashType(e) {
    const hashType = e.target.value;
    this.setState({
      hashType: hashType,
      loading: true
    });
    try {
      const hash = await this.calculateHash(hashType, this.state.file);
      this.setState({
        loading: false,
        hash: hash
      });
    } catch (err) {
      console.error('Error', err);
    }
  }

  async hash(hashType, arrayBuffer) {
    const hashBuffer = await crypto.subtle.digest(hashType, arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
  }

  calculateHash(hashType, file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(this.hash(hashType, reader.result));
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
            <FileHash loading={this.state.loading} hash={this.state.hash} />
          </div>
          :
          ''}
      </div>
    );
  }
}

export default App;