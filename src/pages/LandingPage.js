import React, { Component, createRef } from "react";

import Header from "section/Header";
import Hero from "section/Hero";
import MostPicked from "section/MostPicked";
import Categories from "section/Categories";

import dataLandingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={dataLandingPage.mostPicked}
        />
        <Categories data={dataLandingPage.categories} />
      </>
    );
  }
}
