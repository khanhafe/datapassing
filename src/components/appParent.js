import React from "react";
import Appchild from "./appChild";

export default class Appparent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Appchild myName="hafeez khan" />;
  }
}
