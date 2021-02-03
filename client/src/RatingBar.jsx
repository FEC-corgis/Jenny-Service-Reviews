import React from 'react';
// import styled from 'styled-components'
import Styles, { BarContainer, BarGray, BarBlack } from './Styles.js';

const RatingBar = (props) => {
  // console.log('bar props test', props.rating)
  const styles = {
    width: `${props.rating/5 * 100}%`
  }
return (
  <BarContainer>
    <BarGray></BarGray>
    <BarBlack style={styles}></BarBlack>
  </BarContainer>
)
}

export default RatingBar;