import React, { PureComponent } from 'react';
import GrandsonClass from './grandsonClass';

class SonClass extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>this is son class</p>
        <GrandsonClass />
      </div>
    );
  }
}
export default SonClass;
