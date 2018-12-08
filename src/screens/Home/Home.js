import React, { Component, Fragment } from "react";

// compnents
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="mainContent">
            <Slider />
        </div>
      </Fragment>
    );
  }
}