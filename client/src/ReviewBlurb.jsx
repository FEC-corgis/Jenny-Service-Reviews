import React, { useState } from 'react';

const ReviewBlurb = (props) => {
  const [months, setMonths] = useState({
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
  })
    // console.log('users test', this.props)
    return (
      <div class="container-userReview">
        <p></p>

        <div class="pic">
        <p></p>{<img src={`https://fecuserphotos.s3.us-east-2.amazonaws.com/${props.review.userId}.jpg`}/>}
        </div>

        <div className="name">

          <div className="firstname">
          {props.users[props.review.userId + 1]}
          </div>
        <div className="date">
        {months[props.review.month]} {props.review.year}
        </div>

        </div>

        <div class="desc">
        <br/>{props.review.description}
        </div>

      </div>
    )
}

export default ReviewBlurb;