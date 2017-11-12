import React from 'react';
import { FileHash, HashVerifier } from '.';

export class FileHashContainer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      hash: ''
    }
  }

  async componentDidMount() {
    try {
      const hash = await this.hash(this.props.hashType, this.props.arrayBuffer);
      this.setState({
        hash: hash
      });
    } catch (err) {
      console.error('Error during hash calculation: ', err);
    }
  }

  async componentWillReceiveProps(newProps) {
    if (newProps.hashType !== this.props.hashType) {
      this.setState({
        hash: ''
      });
      try {
        const hash = await this.hash(newProps.hashType, newProps.arrayBuffer);
        this.setState({
          hash: hash
        });
      } catch (err) {
        console.error('Error during hash calculation: ', err);
      }
    }
  }

  async hash(hashType, arrayBuffer) {
    const hashBuffer = await crypto.subtle.digest(hashType, arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
  }

  render() {
    return (
      <div>
        <FileHash hash={this.state.hash} />
        <HashVerifier hash={this.state.hash} />
      </div>
    );
  }
}