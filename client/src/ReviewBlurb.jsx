import React from 'react';

class ReviewBlurb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
      }
    }
  }
  render() {
    // console.log('users test', this.props)
    return (
      <div class="container-userReview">
        <p></p>

        <div class="pic">
        <br/>{this.props.review.userId < 50 ? <img src={`https://randomuser.me/api/portraits/women/${this.props.review.userId}.jpg`}/> : <img src={`https://randomuser.me/api/portraits/men/${this.props.review.userId}.jpg`}/>}
        {/* <br/>{this.props.review.userId < 50 ? `https://randomuser.me/api/portraits/women/${this.props.review.userId}.jpg` : `https://randomuser.me/api/portraits/men/${this.props.review.userId}.jpg`} */}
        </div>

        <div class="name">
        <br/>{this.props.users[this.props.review.userId]}
        <br/> {this.state.months[this.props.review.month]} {this.props.review.year}
        </div>

        <div class="desc">
        <br/>{this.props.review.description}
        </div>

      </div>
    )
  }
}

export default ReviewBlurb;