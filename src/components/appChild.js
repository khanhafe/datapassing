import React from "react";

export default class Appchild extends React.Component {
  constructor() {
    super();
    this.state = {
      mydatatoparent: "this is data passing from child to Parent"
    };
  }

  someFn = () => {
    this.props.callbackFromParent(this.state.mydatatoparent);
  };
  render() {
    return (
      <div>
        I am a child Component
        <br />
        I am a data coming from Parent component = {this.props.myName}
        <button onClick={this.someFn}>click me</button>
      </div>
    );
  }
}
