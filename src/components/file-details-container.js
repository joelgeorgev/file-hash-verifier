import React, { Component } from 'react';
import FileDetails from '../components/file-details';
import FileLoader from '../components/file-loader';
import FileHashContainer from '../components/file-hash-container';

class FileDetailsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayBuffer: undefined,
      fileLoadStatus: 0
    }
  }

  async componentDidMount() {
    try {
      const arrayBuffer = await this.getArrayBuffer(this.props.file);
      this.setState({
        arrayBuffer: arrayBuffer
      });
    } catch (err) {
      console.error('Error', err);
    }
  }

  async componentWillReceiveProps(newProps) {
    if (newProps.file !== this.props.file) {
      this.setState({
        arrayBuffer: undefined
      });
      try {
        const arrayBuffer = await this.getArrayBuffer(newProps.file);
        this.setState({
          arrayBuffer: arrayBuffer
        });
      } catch (err) {
        console.error('Error', err);
      }
    }
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
      <div>
        <FileDetails file={this.props.file} />
        {this.state.fileLoadStatus !== 100 ? <FileLoader fileLoadStatus={this.state.fileLoadStatus} /> : ''}
        {this.state.arrayBuffer ?
          <FileHashContainer hashType={this.props.hashType} arrayBuffer={this.state.arrayBuffer} />
          :
          ''}
      </div>
    );
  }
}

export default FileDetailsContainer;