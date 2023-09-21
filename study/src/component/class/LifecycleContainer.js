import React, { Component } from 'react';
import LifecycleComponent from './LifecycleComponent';

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class LifecycleContainer extends Component {
  state = {
    color: "#000000",
  }

  onClickToChangeColor = () => {
    this.setState({
      color: getRandomColor()
    });
    console.log(this.state.color);
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickToChangeColor}>색상 변경</button>
        <LifecycleComponent color={this.state.color} />
      </div>
    );
  }
}

export default LifecycleContainer;