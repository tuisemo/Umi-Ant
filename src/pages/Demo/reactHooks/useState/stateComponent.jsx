import React from 'react';
import { Button } from 'antd';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You clicked {count} times</p>
        <Button onClick={() => this.setState({ count: count + 1 })}>Click me</Button>
      </div>
    );
  }
}

export default Example;
