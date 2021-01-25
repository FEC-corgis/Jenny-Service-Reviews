import React, { setState, useState, useEffect } from 'react';
import axios from 'axios';
import Averages from './Averages.jsx'
import ReviewBlurb from './ReviewBlurb.jsx'
import Modal from './Modal.jsx'

const App = () => {
  const [averages, setAverages] = useState('')
  const [reviews6, setReviews6] = useState([])
  const [reviewsAll, setReviewsAll] = useState([])
  const [users, setUsers] = useState({})
  const [reviewCount, setReviewCount] = useState('')
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  useEffect(() => {
    axios('/propId/73')
    .then(res =>{
      console.log(res.data)
      let usersObj = {}
      res.data.users.forEach(user => {
        console.log('testing')
          usersObj[user.userId] = user.name
      })
      let top6 = []
      for (let i = 0; i < 6; i++) {
        top6.push(res.data.reviews[i])
      }
      setAverages(res.data.averages)
      setReviews6(top6)
      setReviewsAll(res.data.reviews)
      setUsers(usersObj)
      setReviewCount(res.data.reviewCount)
    })
  }, [])
    return (
      <div className="container">

        <div>
        <p></p>
        <button data-testid="modalButtonTest" onClick={toggleModal}>Show all {reviewCount} reviews</button>
        <Modal
        visible={modal}
        toggleModal={toggleModal}
        averages={averages}
        reviewCount={reviewCount}
        reviewsAll={reviewsAll}
        users={users}
        data-testid="modalTest"
        />
        </div>

        <p></p>
        <div>
        <Averages
        averages={averages}
        reviewCount={reviewCount} />
        </div>

        <div className="container-reviews">
        {reviews6.map((review, index) =>
        <ReviewBlurb
        review={review}
        users={users}
        key={index}
        /> )}
        </div>

      </div>
    )
}

export default App;