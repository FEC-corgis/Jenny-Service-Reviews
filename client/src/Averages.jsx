import React from 'react';

class Averages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: '',
    }
  }
  render() {
    // console.log('avgs props test', this.props)

    if (!this.props.visible) {
      return (
        <div>

          <div class="overall">
          {this.props.averages.avgOverall} ({this.props.reviewCount} reviews)
          </div>

          <div class="container-avgs">

          <div>Cleanliness</div>
            <div className="rating">{this.props.averages.avgCleanliness}</div>

          <div>Accuracy</div>
          <div className="rating">{this.props.averages.avgAccuracy}</div>

          <div >Communication</div>
          <div className="rating">{this.props.averages.avgCommunication}</div>

          <div>Location</div>
          <div className="rating">{this.props.averages.avgLocation}</div>

          <div>Check-in</div>
          <div className="rating">{this.props.averages.avgCheckIn}</div>

          <div>Value</div>
          <div className="rating">{this.props.averages.avgValue}</div>

          </div>

        </div>
      )
    } else {
      return (
        <div>

          <div class="overall">
          {this.props.averages.avgOverall} ({this.props.reviewCount} reviews)
          </div>

          <div class="modal-container-avgs">

          <div>Cleanliness</div>
            <div className="rating">{this.props.averages.avgCleanliness}</div>

          <div>Accuracy</div>
          <div className="rating">{this.props.averages.avgAccuracy}</div>

          <div >Communication</div>
          <div className="rating">{this.props.averages.avgCommunication}</div>

          <div>Location</div>
          <div className="rating">{this.props.averages.avgLocation}</div>

          <div>Check-in</div>
          <div className="rating">{this.props.averages.avgCheckIn}</div>

          <div>Value</div>
          <div className="rating">{this.props.averages.avgValue}</div>

          </div>

        </div>
      )
    }
  }
}

export default Averages;