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
        <p></p>{<img src={`https://fecuserphotos.s3.us-east-2.amazonaws.com/${this.props.review.userId}.jpg`}/>}
        </div>

        <div class="name">
        <br/>{this.props.users[this.props.review.userId + 1]}
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