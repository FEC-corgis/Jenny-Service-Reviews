import React from 'react';
import Ratings from './Ratings.jsx'

const Averages = (props) => {
    // console.log('avgs props test', this.props)
    if (!props.visible) {
      return (
        <div>

          <div className="overall" data-testid="overallTest">
          {props.averages.avgOverall} ({props.reviewCount} reviews)
          <p></p>
          </div>

          <Ratings
          averages={props.averages}
          className="container-avgs"
          data-testid="ratingsTest"
          />

        </div>
      )
    } else {
      return (
        <div>

          <div className="overall" data-testid="overallTest">
          {props.averages.avgOverall} ({props.reviewCount} reviews)
          </div>

          <Ratings
          averages={props.averages}
          className="modal-container-avgs"
          data-testid="ratingsModalTest"
          />

        </div>
      )
    }
}

export default Averages;