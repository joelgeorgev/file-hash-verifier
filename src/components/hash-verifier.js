import React from 'react';

import success from '../assets/success.svg';
import fail from '../assets/fail.svg';

export class HashVerifier extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      verify: false,
      text: '',
      match: false
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      match: newProps.hash === this.state.text.replace(/ /g, '').toLowerCase()
    });
  }

  toggleVerify = (e) => {
    this.setState({
      verify: e.target.checked
    });
  }

  verifyHash = (e) => {
    const text = e.target.value;
    this.setState({
      text: text,
      match: this.props.hash === text.replace(/ /g, '').toLowerCase()
    });
  }

  render() {
    const { verify, text, match } = this.state;
    return (
      <div className='flex flex-column mt4'>
        <div>
          <input type='checkbox' checked={verify} className='pointer'
            onChange={this.toggleVerify} />
          <label className='ml2 b'>Compare with:</label>
        </div>
        {verify &&
          <div className='flex h2'>
            <input type='text' value={text}
              className='w-100 ph1 bt br-0 bb bl b--light-silver'
              onChange={this.verifyHash} />
            <button className='bg-transparent ba b--light-silver'>
              <img src={match ? success : fail}
                alt={match ? 'Success' : 'Fail'} className='w1' />
            </button>
          </div>}
      </div>
    );
  }
}