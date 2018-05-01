import React from 'react';

import { FileDetails, FileLoader, FileHashContainer } from '.';

export class FileDetailsContainer extends React.PureComponent {

  reader;

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
    return nextProps.file !== prevState.file ? { file: nextProps.file, arrayBuffer: undefined } : null
  }

  async componentDidUpdate(prevProps, prevState) {
    const { file, arrayBuffer } = this.state;
    if (!arrayBuffer) {
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
      const reader = new FileReader();
      this.reader = reader;
      reader.onload = () => { resolve(reader.result); }
      reader.onprogress = e => { this.setState({ fileLoadStatus: Math.round((e.loaded / e.total) * 100) }); }
      reader.onabort = () => { this.setState({ fileLoadStatus: -1 }); }
      reader.onerror = err => { reject(err); }
      reader.readAsArrayBuffer(file);
    });
  }

  cancelLoad = () => {
    if (this.reader.readyState === 1) {
      this.reader.abort();
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