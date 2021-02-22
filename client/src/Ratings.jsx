/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components';
import Styles, { Rating, ContainerAvgs, RatingAvg } from './Styles.js';
import RatingBar from './RatingBar.jsx'

const Ratings = (props) => {
  return (
      <ContainerAvgs>
<div>
          <Rating>
          <div>Cleanliness</div>
          <RatingAvg>
            <RatingBar rating={props.averages.avgCleanliness}/>
            {props.averages.avgCleanliness}
            </RatingAvg>
            </Rating>

          <Rating>
          <div>Accuracy</div>
          <RatingAvg>
          <RatingBar rating={props.averages.avgAccuracy}/>
            {props.averages.avgAccuracy}
          </RatingAvg>
            </Rating>

          <Rating>
          <div >Communication</div>
          <RatingAvg>
          <RatingBar rating={props.averages.avgCommunication}/>
            {props.averages.avgCommunication}
          </RatingAvg>
            </Rating>
    </div>
    <div>
          <Rating>
          <div>Location</div>
          <RatingAvg>
          <RatingBar rating={props.averages.avgLocation}/>
            {props.averages.avgLocation}
          </RatingAvg>
            </Rating>

          <Rating>
          <div>Check-in</div>
          <RatingAvg>
          <RatingBar rating={props.averages.avgCheckIn}/>
            {props.averages.avgCheckIn}
          </RatingAvg>
            </Rating>

          <Rating>
          <div>Value</div>
          <RatingAvg>
          <RatingBar rating={props.averages.avgValue}/>
            {props.averages.avgValue}
          </RatingAvg>
            </Rating>
    </div>
          </ContainerAvgs>
  )
}

export default Ratings;