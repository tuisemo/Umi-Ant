import React from 'react';
import { Consumer } from '../context';

const GrandsonClass = () => (
  <div>
    <p>this is grandson components</p>
    <Consumer>{price => <span>{price}</span>}</Consumer>
  </div>
);

export default GrandsonClass;
