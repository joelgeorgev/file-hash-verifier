import React from 'react';

import { HashLoader, FileHash, HashVerifier } from '.';

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
      const { hashType, arrayBuffer, onHashCompletion } = this.props;
      const hash = await this.calculateHash(hashType, arrayBuffer);
      this.setState({ hashType, hash });
      onHashCompletion();
    } catch (err) {
      console.error('Error during hash calculation: ', err);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { hashType } = nextProps;
    return hashType !== prevState.hashType ? { hashType, hash: '' } : null
  }

  async componentDidUpdate(prevProps, prevState) {
    const { hashType } = this.state;
    if (hashType !== prevState.hashType) {
      try {
        const { arrayBuffer, onHashCompletion } = this.props;
        const hash = await this.calculateHash(hashType, arrayBuffer);
        this.setState({ hash });
        onHashCompletion();
      } catch (err) {
        console.error('Error during hash calculation: ', err);
      }
    }
  }

  calculateHash = async (hashType, arrayBuffer) => {
    if (hashType) {
      const hashBuffer = await crypto.subtle.digest(hashType, arrayBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
      return hashHex;
    }
    return '';
  }

  render() {
    const { loading } = this.props;
    const { hash } = this.state;
    return (
      <div>
        {loading && <HashLoader />}
        {hash &&
          <div>
            <FileHash hash={hash} />
            <HashVerifier hash={hash} />
          </div>}
      </div>
    );
  }
}