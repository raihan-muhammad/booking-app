import React, { Component } from "react";

import Header from "section/Header";
export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}
