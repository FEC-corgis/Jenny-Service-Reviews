/* eslint-disable react/prop-types */
import React, { setState, useState, useEffect } from 'react';
import axios from 'axios';
import Averages from './Averages.jsx'
import ReviewBlurb from './ReviewBlurb.jsx'
import Modal from './Modal.jsx'
// import styled from 'styled-components'
import Styles, { ContainerReviews, ModalButton, ModalButtonContainer, TestContainer, TestInnerContainer } from './Styles.js'

const App = (props) => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    return (
<TestContainer>
  <TestInnerContainer>

      <Averages
      averages={averages}
      reviewCount={reviewCount} />

      <ContainerReviews>
      {reviews6.map((review, index) =>
      <ReviewBlurb
      review={review}
      users={users}
      key={index}
      /> )}
      </ContainerReviews>

     <ModalButtonContainer>
     <p></p>
     <ModalButton data-testid="modalButtonTest" onClick={toggleModal}>Show all {reviewCount} reviews</ModalButton>
     <Modal
     visible={modal}
     toggleModal={toggleModal}
     averages={averages}
     reviewCount={reviewCount}
     reviewsAll={reviewsAll}
     users={users}
     data-testid="modalTest"
     />
     </ModalButtonContainer>
     </TestInnerContainer>

</TestContainer>
    )
}

export default App;