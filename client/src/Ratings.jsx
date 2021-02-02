/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components';
import Styles, { Rating, ContainerAvgs } from './Styles.js';

const Ratings = (props) => {
  return (
    <div className={props.className} data-testid="ratingsTest">
      <ContainerAvgs>

          <div>Cleanliness</div>
          <Rating>{props.averages.avgCleanliness}</Rating>

          <div>Accuracy</div>
          <Rating>{props.averages.avgAccuracy}</Rating>

          <div >Communication</div>
          <Rating>{props.averages.avgCommunication}</Rating>

          <div>Location</div>
          <Rating>{props.averages.avgLocation}</Rating>

          <div>Check-in</div>
          <Rating>{props.averages.avgCheckIn}</Rating>

          <div>Value</div>
          <Rating>{props.averages.avgValue}</Rating>
          </ContainerAvgs>
    </div>
  )
}

export default Ratings;