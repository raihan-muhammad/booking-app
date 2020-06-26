import React, { Component } from "react";
import Header from "section/Header";
import PageDetailTitle from "section/PageDetailTitle";
import Footer from "section/Footer";

import itemDetails from "json/itemDetails";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
        <Footer />
      </>
    );
  }
}
