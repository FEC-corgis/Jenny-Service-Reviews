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
    axios('/propId/18')
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
      <div>
        {this.state.averages.avgOverall} ({this.state.totalReviews} reviews)

        <br/>Cleanliness {this.state.averages.avgCleanliness}
        <br/>Accuracy {this.state.averages.avgAccuracy}
        <br/>Communication {this.state.averages.avgCommunication}
        <br/>Location {this.state.averages.avgLocation}
        <br/>Check-in {this.state.averages.avgCheckIn}
        <br/>Value {this.state.averages.avgValue}

        {this.state.reviews6.map(review => <ReviewBlurb review={review} users={this.state.users} /> )}

        <p></p>
        <button>Show all {this.state.totalReviews} reviews</button>

      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))