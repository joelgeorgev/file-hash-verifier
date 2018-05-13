import React from 'react';

import { FileDetails, FileLoader, FileHashContainer } from '.';

export class FileDetailsContainer extends React.PureComponent {

  reader = new FileReader();

  constructor(props) {
    super(props);
    this.state = {
      file: props.file,
      arrayBuffer: undefined,
      fileLoadStatus: 0
    }
  }

  async componentDidMount() {
    try {
      const { file } = this.props;
      const arrayBuffer = await this.getArrayBuffer(file);
      this.setState({ file, arrayBuffer });
    } catch (err) {
      console.error('Error during file read operation: ', err);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { file } = nextProps;
    return file !== prevState.file ? { file, arrayBuffer: undefined } : null
  }

  async componentDidUpdate(prevProps, prevState) {
    const { file } = this.state;
    if (file !== prevState.file) {
      try {
        const arrayBuffer = await this.getArrayBuffer(file);
        this.setState({ arrayBuffer });
      } catch (err) {
        console.error('Error during file read operation: ', err);
      }
    }
  }

  getArrayBuffer = (file) => {
    return new Promise((resolve, reject) => {
      const reader = this.reader;
      reader.onload = () => { resolve(reader.result); }
      reader.onprogress = e => { this.setState({ fileLoadStatus: Math.round((e.loaded / e.total) * 100) }); }
      reader.onabort = () => { this.setState({ fileLoadStatus: -1 }); }
      reader.onerror = err => { reject(err); }
      reader.readAsArrayBuffer(file);
    });
  }

  cancelLoad = () => {
    const reader = this.reader;
    if (reader.readyState === 1) {
      reader.abort();
    }
  }

  render() {
    const { hashType } = this.props;
    const { file, arrayBuffer, fileLoadStatus } = this.state;
    return (
      <div>
        {fileLoadStatus !== 100 &&
          <FileLoader fileLoadStatus={fileLoadStatus} cancelLoad={this.cancelLoad} />}
        {arrayBuffer &&
          <div>
            <FileDetails file={file} />
            <FileHashContainer hashType={hashType} arrayBuffer={arrayBuffer} />
          </div>}
      </div>
    );
  }
}