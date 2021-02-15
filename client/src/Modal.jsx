import React from 'react';
import Averages from './Averages.jsx';
import ReviewBlurb from './ReviewBlurb.jsx';
// import styled from 'styled-components';
import Styles, { ModalBackground, ModalBody, ModalX, ModalAvgs, ModalSearch, ModalReviews, ModalInput } from './Styles.js';

const Modal = (props) => {
  const onClose = () => {
    props.toggleModal()
  }
  //  console.log('reviews test', this.props)
    if (!props.visible) {
      return null
    } else {
      return (
        <ModalBackground>
          <ModalBody>

          <ModalX onClick={onClose}>X</ModalX>

              <ModalAvgs>
              <Averages
              averages={props.averages}
              reviewCount={props.reviewCount}
              visible={props.visible}/>
              </ModalAvgs>

              <ModalSearch>
                  <ModalInput type="text" name="search" placeholder="Search reviews" autocomplete="off"/>
              </ModalSearch>

              <ModalReviews data-testid="modalReviewsTest">
              {props.visible ?
              props.reviewsAll.map((review, index) => <ReviewBlurb
              review={review}
              users={props.users}
              key={index}
              data-testid="reviewBlurbTest"/>) :
              props.reviews6.map((review, index) => <ReviewBlurb
              review={review}
              users={props.users}
              key={index}
              data-testid="reviewBlurbTest"/>)}
              </ModalReviews>

            </ModalBody>
        </ModalBackground>
      )
    }
}

export default Modal;