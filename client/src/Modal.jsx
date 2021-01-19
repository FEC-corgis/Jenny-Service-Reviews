import React from 'react';
import Averages from './Averages.jsx';
import ReviewBlurb from './ReviewBlurb.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: '',
    }
    this.onClose = this.onClose.bind(this)
  }
  onClose() {
    this.props.toggleModal()
  }
  render() {
   console.log('reviews test', this.props)
    if (!this.props.visible) {
      return null
    } else {
      return (
        <div className="modalBackground">
          <div className="modalBody">

          <div className="modal-X" onClick={this.onClose}>X</div>

              <div className="modal-avgs">
              <Averages
              averages={this.props.averages}
              totalReviews={this.props.totalReviews}
              visible={this.props.visible}/>
              </div>

              <div className="modal-search">

                <form>
                  <input type="text" name="search" placeholder="Search reviews"/>
                </form>

              </div>

              <div className="modal-reviews">
              {this.props.visible ?
              this.props.reviewsAll.map(review => <ReviewBlurb review={review} users={this.props.users} />) :
              this.props.reviews6.map(review => <ReviewBlurb review={review} users={this.props.users} />)}
              </div>

            </div>
        </div>
      )
    }
    }
}

export default Modal;