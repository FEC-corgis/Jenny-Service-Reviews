/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import styled from 'styled-components'
import Styles, { ContainerUserReview, Pic, Name, FirstName, Date, Description, Avatar } from './Styles.js';

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
      <ContainerUserReview data-testid="reviewBlurbTest">
        <p></p>

        <Pic>
        <p></p>{<Avatar src={`https://fecuserphotos.s3.us-east-2.amazonaws.com/${props.review.userId}.jpg`}/>}
        </Pic>

        <Name>
          <FirstName>
          {props.users[props.review.userId + 1]}
          </FirstName>
        <Date>
        {months[props.review.month]} {props.review.year}
        </Date>
        </Name>

        <Description>
        <br/>{props.review.description}
        </Description>

      </ContainerUserReview>
    )
}

export default ReviewBlurb;