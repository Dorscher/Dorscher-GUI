import React, { Component } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default class HomeView extends Component {
  render() {
    return (
      <>
        <HelmetProvider>
          <Helmet>
            <title>Contact</title>
          </Helmet>
        </HelmetProvider>

        <h1>Contact</h1>
      </>
    );
  }
}
