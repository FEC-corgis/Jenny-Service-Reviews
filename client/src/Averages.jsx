import React from 'react';

const Averages = (props) => {
    // console.log('avgs props test', this.props)
    if (!props.visible) {
      return (
        <div>

          <div class="overall">
          {props.averages.avgOverall} ({props.reviewCount} reviews)
          </div>

          <div class="container-avgs">

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

        </div>
      )
    } else {
      return (
        <div>

          <div class="overall">
          {props.averages.avgOverall} ({props.reviewCount} reviews)
          </div>

          <div class="modal-container-avgs">

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

        </div>
      )
    }
}

export default Averages;