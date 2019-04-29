import React, { PureComponent } from 'react';
import { Button } from 'antd';
import SonClass from './components/sonClass';
import { Provider } from './context';

class CreateContext extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
    };
  }

  clickGoods = () => {
    const { price } = this.state;
    this.setState({
      price: price + 1,
    });
  };

  render() {
    const { price } = this.state;
    return (
      <div>
        <p>this is father components</p>
        <Provider value={price}>
          <Button onClick={this.clickGoods}>creatContext()</Button>
          <SonClass />
        </Provider>
      </div>
    );
  }
}
export default CreateContext;
