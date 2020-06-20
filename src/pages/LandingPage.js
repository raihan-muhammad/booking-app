import React, { Component } from "react";

import Header from "section/Header";
import Hero from "section/Hero";
import MostPicked from "section/MostPicked";

import dataLandingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero />
        <MostPicked data={dataLandingPage.mostPicked} />
      </>
    );
  }
}
