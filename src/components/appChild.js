import React from "react";

export default class Appchild extends React.Component {
  render() {
    this.state = {
      mydatatoparent: "this is data passing from child to Parent"
    };
    return (
      <div>
        I am a child Component
        <br />
        I am a data coming from Parent component = {this.props.myName}
      </div>
    );
  }
}
