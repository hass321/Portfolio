import React, { Component, Fragment } from "react";

import MainSlider from '../../components/Slider/Slider';
import MiniSlider from "../../components/Slider/MiniSlider";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="mainContent">
          <MainSlider autoplay={2000}/>
        </div>
        <MiniSlider />
      </Fragment>
    );
  }
}
