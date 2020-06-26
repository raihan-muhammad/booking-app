import React, { Component } from "react";

import Header from "section/Header";
import Hero from "section/Hero";
import MostPicked from "section/MostPicked";
import Categories from "section/Categories";
import Testimony from "section/Testimony";

import dataLandingPage from "json/landingPage.json";
import Footer from "section/Footer";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
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
        <Testimony data={dataLandingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
