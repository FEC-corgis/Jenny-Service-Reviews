import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewBlurb from './ReviewBlurb.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      averages: '',
      reviews6: [],
      users: {},
      totalReviews: '',
    }
  }
  componentDidMount() {
    axios('/propId/3')
    .then(res =>{
      console.log(res.data)
      let usersObj = {}
      res.data.users.forEach(user => {
        usersObj[user.userId] = user.name
      })
      this.setState({
        averages: res.data.averages,
        reviews6: res.data.reviews6,
        users: usersObj,
        totalReviews: res.data.totalReviews,
      })
    })
  }
  render() {
    return (
      <div class="container">

        <div>
        {this.state.averages.avgOverall} ({this.state.totalReviews} reviews)
        </div>

        <div class="container-avgs">

          <div>
        <br/>Cleanliness {this.state.averages.avgCleanliness}
        </div>
        <div>
        <br/>Accuracy {this.state.averages.avgAccuracy}
        </div>
        <div>
        <br/>Communication {this.state.averages.avgCommunication}
        </div>
        <div>
        <br/>Location {this.state.averages.avgLocation}
        </div>
        <div>
        <br/>Check-in {this.state.averages.avgCheckIn}
        </div>
        <div>
        <br/>Value {this.state.averages.avgValue}
        </div>

        </div>

        <div class="container-reviews">
        {this.state.reviews6.map(review => <ReviewBlurb review={review} users={this.state.users} /> )}
        </div>

        <div>
        <p></p>
        <button>Show all {this.state.totalReviews} reviews</button>
        </div>

      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))