import React from 'react';

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    const { render } = this.props;
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {/* ...但我们如何渲染 <p> 以外的东西? */}
        {render(this.state)}
      </div>
    );
  }
}

export default Mouse;
