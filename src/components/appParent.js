import React from "react";
import Appchild from "./appChild";

export default class Appparent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromChild: ""
    };
  }
  myCallback = params => {
    this.setState({ fromChild: params });
  };
  render() {
    return (
      <div>
        <Appchild callbackFromParent={this.myCallback} myName="hafeez khan" />
        {this.state.fromChild}
      </div>
    );
  }
}
