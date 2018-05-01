import React from 'react';

import { FileHash, HashVerifier } from '.';

export class FileHashContainer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      hashType: props.hashType,
      hash: ''
    }
  }

  async componentDidMount() {
    try {
      const { hashType, arrayBuffer } = this.props;
      const hash = await this.hash(hashType, arrayBuffer);
      this.setState({ hashType, hash });
    } catch (err) {
      console.error('Error during hash calculation: ', err);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.hashType !== prevState.hashType ? { hashType: nextProps.hashType, hash: '' } : null
  }

  async componentDidUpdate(prevProps, prevState) {
    const { arrayBuffer } = this.props;
    const { hashType, hash } = this.state;
    if (!hash) {
      try {
        const hash = await this.hash(hashType, arrayBuffer);
        this.setState({ hash });
      } catch (err) {
        console.error('Error during hash calculation: ', err);
      }
    }
  }

  hash = async (hashType, arrayBuffer) => {
    const hashBuffer = await crypto.subtle.digest(hashType, arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
  }

  render() {
    const { hash } = this.state;
    return (
      <div>
        <FileHash hash={hash} />
        <HashVerifier hash={hash} />
      </div>
    );
  }
}