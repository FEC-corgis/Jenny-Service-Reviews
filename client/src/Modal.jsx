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
          <div className="modalBody">

          <div className="modal-X" onClick={onClose}>X</div>

              <div className="modal-avgs">
              <Averages
              averages={props.averages}
              totalReviews={props.totalReviews}
              visible={props.visible}/>
              </div>

              <div className="modal-search">

                <form>
                  <input type="text" name="search" placeholder="Search reviews"/>
                </form>

              </div>

              <div className="modal-reviews">
              {props.visible ?
              props.reviewsAll.map(review => <ReviewBlurb review={review} users={props.users} />) :
              props.reviews6.map(review => <ReviewBlurb review={review} users={props.users} />)}
              </div>

            </div>
        </div>
      )
    }
}

export default Modal;