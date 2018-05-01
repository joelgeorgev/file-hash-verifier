import React from 'react';

import { FileDetails, FileLoader, FileHashContainer } from '.';

export class FileDetailsContainer extends React.PureComponent {

  reader;

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
      console.error('Error during file read operation: ', err);
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
        console.error('Error during file read operation: ', err);
      }
    }
  }

  getArrayBuffer(file) {
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
    const { file, hashType } = this.props;
    const { arrayBuffer, fileLoadStatus } = this.state;
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