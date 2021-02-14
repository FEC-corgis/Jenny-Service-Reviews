import React from 'react';
import Ratings from './Ratings.jsx'
import ModalRatings from './ModalRatings.jsx'
// import styled from 'styled-components';
import Styles, { Overall, ModalContainerAvgs, PinkStar } from './Styles.js';

const Averages = (props) => {
    // console.log('avgs props test', this.props)
    if (!props.visible) {
      return (
        <div>

          <Overall data-testid="overallTest">
          <PinkStar/> {props.averages.avgOverall} ({props.reviewCount} reviews)
          <p></p>
          </Overall>

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

          <Overall data-testid="overallTest">
          <PinkStar/> {props.averages.avgOverall} ({props.reviewCount} reviews)
          </Overall>

          <ModalRatings
          averages={props.averages}
          className="modal-container-avgs"
          data-testid="ratingsModalTest"
          />

        </div>
      )
    }
}

export default Averages;