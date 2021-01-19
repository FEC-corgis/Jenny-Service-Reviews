import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Averages from './Averages.jsx'
import ReviewBlurb from './ReviewBlurb.jsx'
import Modal from './Modal.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      averages: '',
      reviews6: [],
      users: {},
      totalReviews: '',
      modal: false,
    }
    this.toggleModal = this.toggleModal.bind(this)
  }
  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
  }
  componentDidMount() {
    axios('/propId/7')
    .then(res =>{
      console.log(res.data)
      let usersObj = {}
      res.data.users.forEach(user => {
          usersObj[user.userId] = user.name
        }
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
        <p></p>
        <button onClick={this.toggleModal}>Show all {this.state.totalReviews} reviews</button>
        <Modal visible={this.state.modal} toggleModal={this.toggleModal} averages={this.state.averages} totalReviews={this.state.totalReviews} reviews6={this.state.reviews6} users={this.state.users}/>
        </div>

          <p></p>
          <div>
          <Averages averages={this.state.averages} totalReviews={this.state.totalReviews} />
          </div>

        <div class="container-reviews">
        {this.state.reviews6.map(review => <ReviewBlurb review={review} users={this.state.users} /> )}
        </div>

      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))