import React, { Component } from 'react';
import FilePicker from './components/file-picker';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: undefined
    }
  }

  setFile(e) {
    const file = e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files[0] : e.target.files[0];
    this.setState({
      file: file
    });
  }

  render() {
    return (
      <div className='flex flex-column justify-center ma4'>
        <FilePicker setFile={this.setFile.bind(this)} />
      </div>
    );
  }
}

export default App;