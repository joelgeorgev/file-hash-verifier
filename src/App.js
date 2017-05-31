import React, { Component } from 'react';
import FilePicker from './components/file-picker';
import HashSelector from './components/hash-selector';
import FileLoader from './components/file-loader';
import FileDetails from './components/file-details';
import FileHash from './components/file-hash';
import HashVerifier from './components/hash-verifier';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: undefined,
      fileLoadStatus: 0,
      arrayBuffer: undefined,
      hashType: 'sha-1',
      hash: undefined
    }
  }

  async setFile(e) {
    const files = e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files : e.target.files;
    if (files.length) {
      this.setState({
        file: files[0],
        fileLoadStatus: 0,
        arrayBuffer: undefined,
        hash: ''
      });
      try {
        const arrayBuffer = await this.getArrayBuffer(files[0]);
        const hash = await this.hash(this.state.hashType, arrayBuffer);
        this.setState({
          arrayBuffer: arrayBuffer,
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
      hash: ''
    });
    if (this.state.arrayBuffer) {
      try {
        const hash = await this.hash(hashType, this.state.arrayBuffer);
        this.setState({
          hash: hash
        });
      } catch (err) {
        console.error('Error', err);
      }
    }
  }

  async hash(hashType, arrayBuffer) {
    const hashBuffer = await crypto.subtle.digest(hashType, arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
  }

  getArrayBuffer(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => { resolve(reader.result); };
      reader.onprogress = e => { this.setState({ fileLoadStatus: Math.round((e.loaded / e.total) * 100) }); };
      reader.onerror = err => { reject(err); }
      reader.readAsArrayBuffer(file);
    });
  }

  render() {
    return (
      <div className='flex flex-column justify-center ma4'>
        <FilePicker fileLoadStatus={this.state.fileLoadStatus} setFile={this.setFile.bind(this)} />
        <HashSelector hashType={this.state.hashType} setHashType={this.setHashType.bind(this)} />
        {this.state.file ?
          <div>
            <FileLoader fileLoadStatus={this.state.fileLoadStatus} />
            <FileDetails file={this.state.file} />
            <FileHash fileLoadStatus={this.state.fileLoadStatus} hash={this.state.hash} />
            <HashVerifier hash={this.state.hash} />
          </div>
          :
          ''}
      </div>
    );
  }
}

export default App;