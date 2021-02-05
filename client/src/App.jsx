import React, { setState, useState, useEffect } from 'react';
import axios from 'axios';
import Averages from './Averages.jsx'
import ReviewBlurb from './ReviewBlurb.jsx'
import Modal from './Modal.jsx'
// import styled from 'styled-components'
import Styles, { Container, ContainerReviews } from './Styles.js'

const App = (props) => {
  console.log('PROPS TEST', props)
  const [averages, setAverages] = useState('')
  const [reviews6, setReviews6] = useState([])
  const [reviewsAll, setReviewsAll] = useState([])
  const [users, setUsers] = useState({})
  const [reviewCount, setReviewCount] = useState('')
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  let id = props.match.params.id
  useEffect(() => {
    axios(`/reviews/propId/${id}`)
    .then(res =>{
      console.log('REVIEWS 50reviews test', res.data)
      let usersObj = {}
      res.data.users.forEach(user => {
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
    // OVERALL RATING ENDPOINT
    .then(() => {
      return axios(`/reviews/overallRating/${id}`)
    })
    .then(res => {
      console.log('REVIEWS overallRating', res.data)
    })
    // TOTAL REVIEW COUNT ENDPOINT
    .then(() => {
      return axios(`/reviews/totalReviews/${id}`)
    })
    .then(res => {
      console.log('REVIEWS totalReviews', res.data)
    })
  }, [])
    return (
      <Container>

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

        <ContainerReviews>
        {reviews6.map((review, index) =>
        <ReviewBlurb
        review={review}
        users={users}
        key={index}
        /> )}
        </ContainerReviews>

      </Container>
    )
}

export default App;