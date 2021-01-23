import React from 'react';
import Ratings from './Ratings.jsx'

const Averages = (props) => {
    // console.log('avgs props test', this.props)
    if (!props.visible) {
      return (
        <div>

          <div class="overall">
          {props.averages.avgOverall} ({props.reviewCount} reviews)
          <p></p>
          </div>

          <Ratings
          averages={props.averages}
          className="container-avgs"/>

        </div>
      )
    } else {
      return (
        <div>

          <div class="overall">
          {props.averages.avgOverall} ({props.reviewCount} reviews)
          </div>

          <Ratings
          averages={props.averages}
          className="modal-container-avgs"/>

        </div>
      )
    }
}

export default Averages;