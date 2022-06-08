import React, { Component } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default class HomeView extends Component {
  render() {
    return (
      <>
        <HelmetProvider>
          <Helmet>
            <title>About me</title>
          </Helmet>
        </HelmetProvider>

        <h1>About</h1>
      </>
    );
  }
}
