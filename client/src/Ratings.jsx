/* eslint-disable react/prop-types */
import React from 'react';

const Ratings = (props) => {
  return (
    <div className={props.className} data-testid="ratingsTest">

          <div>Cleanliness</div>
          <div className="rating">{props.averages.avgCleanliness}</div>

          <div>Accuracy</div>
          <div className="rating">{props.averages.avgAccuracy}</div>

          <div >Communication</div>
          <div className="rating">{props.averages.avgCommunication}</div>

          <div>Location</div>
          <div className="rating">{props.averages.avgLocation}</div>

          <div>Check-in</div>
          <div className="rating">{props.averages.avgCheckIn}</div>

          <div>Value</div>
          <div className="rating">{props.averages.avgValue}</div>

    </div>
  )
}

export default Ratings;