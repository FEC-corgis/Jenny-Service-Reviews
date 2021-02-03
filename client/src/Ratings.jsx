/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components';
import Styles, { Rating, ContainerAvgs } from './Styles.js';
import RatingBar from './RatingBar.jsx'

const Ratings = (props) => {
  return (
    <div className={props.className} data-testid="ratingsTest">
      <ContainerAvgs>

          <div>Cleanliness</div>
          <Rating>
            <RatingBar rating={props.averages.avgCleanliness}></RatingBar>
            {props.averages.avgCleanliness}
            </Rating>

          <div>Accuracy</div>
          <Rating>
          <RatingBar rating={props.averages.avgAccuracy}></RatingBar>
            {props.averages.avgAccuracy}
            </Rating>

          <div >Communication</div>
          <Rating>
          <RatingBar rating={props.averages.avgCommunication}></RatingBar>
            {props.averages.avgCommunication}
            </Rating>

          <div>Location</div>
          <Rating>
          <RatingBar rating={props.averages.avgLocation}></RatingBar>
            {props.averages.avgLocation}
            </Rating>

          <div>Check-in</div>
          <Rating>
          <RatingBar rating={props.averages.avgCheckIn}></RatingBar>
            {props.averages.avgCheckIn}
            </Rating>

          <div>Value</div>
          <Rating>
          <RatingBar rating={props.averages.avgValue}></RatingBar>
            {props.averages.avgValue}
            </Rating>
          </ContainerAvgs>
    </div>
  )
}

export default Ratings;