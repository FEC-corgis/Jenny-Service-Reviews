import React from 'react';
import Averages from './Averages.jsx';
import ReviewBlurb from './ReviewBlurb.jsx';

const Modal = (props) => {
  const onClose = () => {
    props.toggleModal()
  }
  //  console.log('reviews test', this.props)
    if (!props.visible) {
      return null
    } else {
      return (
        <div className="modalBackground">
          <div className="modalBody" >

          <div className="modal-X" onClick={onClose}>X</div>

              <div className="modal-avgs">
              <Averages
              averages={props.averages}
              reviewCount={props.reviewCount}
              visible={props.visible}/>
              </div>

              <div className="modal-search">

                <form>
                  <input type="text" name="search" placeholder="Search reviews"/>
                </form>

              </div>

              <div className="modal-reviews" data-testid="modalReviewsTest">
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
              </div>

            </div>
        </div>
      )
    }
}

export default Modal;