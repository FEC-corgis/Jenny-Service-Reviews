// import styled from 'styled-components';
import { Star } from '@styled-icons/boxicons-solid/Star'

// FRONT PAGE

export const Container = window.styled.div`
  display: grid;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  width: 80%;
  margin-left: 5%;
  margin-right: auto;
  font-family: 'Nunito Sans', sans-serif;
`;

// AVERAGES

export const Overall = window.styled.div`
  font-size: 22px;
  font-weight: 700;
  text-align: left;
`;

export const ContainerAvgs = window.styled.div`
display: flex;
width: 90vw;
justify-content: left;
grid-template-columns: repeat(4, 1fr);
column-gap: 8vw;
line-height: 35px;
`;

export const Rating = window.styled.div`
  display: flex;
  column-gap: 17vw;
`;

export const RatingAvg = window.styled.div`
display: flex;
align-items: center;
column-gap: 10px;
margin-left: auto;
font-size: 12px;
`;

// REVIEWS

export const ContainerReviews = window.styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const ContainerUserReview = window.styled.div`
  display: grid;
  grid-template-columns: 0px 35vw;
  grid-template-areas:
  "pic name"
  "desc desc";
`;

export const Pic = window.styled.div`
  grid-area: pic;
`;

export const Name = window.styled.div`
  grid-area: name;
  text-align: left;
`;

export const FirstName = window.styled.div`
  font-weight: 700;
`;

export const Date = window.styled.div`
  color: gray;
  font-size: 13px;
`;

export const Description = window.styled.div`
  grid-area: desc;
`;

export const Avatar = window.styled.img`
  border-radius: 50%;
  height: 60px;
`;

export const PicName = window.styled.div`
display: flex;
align-items: center;
gap: 20px;
`;

export const Blurb = window.styled.div`
display: flex;
flex-direction: column;
`;

// MODAL

export const ModalBackground = window.styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalBody = window.styled.div`
  background-color: white;
  border-radius: 12px;
  width:80%;
  height: 85%;
  margin: 40px auto;
  text-align: center;
  display: grid;
  grid-template-columns: 2fr 3fr;
  column-gap: 75px;
  grid-template-rows: 40px;
  grid-template-areas:
  "modal-X modal-X"
  "modal-avgs modal-search"
  "modal-avgs modal-reviews";
`;

export const ModalX = window.styled.div`
  text-align: left;
  top: 20px;
  margin: 20px;
  grid-area: modal-X;
  cursor: pointer;
`;

export const ModalAvgs = window.styled.div`
  grid-area: modal-avgs;
  display: flex;
`;

export const ModalOverall = window.styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  text-align: left;
  margin: 20px;
`;

export const ModalSearch = window.styled.form`
  grid-area: modal-search;
  position: relative;
  top: 20px;
  background-color: whitesmoke;
  width: 92%;
  height: 40px;
  border-radius: 30px;
  border-style: solid;
  border-color: gray;
  border-width: 1px;
`;

export const ModalReviews = window.styled.div`
  grid-area: modal-reviews;
  position: relative;
  top: 10%;
  height: 90%;
  overflow: scroll;
  text-align: left;
`;

export const ModalContainerAvgs = window.styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 20px;
`;

export const ModalRating = window.styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 35px;
  column-gap: 5vw;
`;

export const ModalRatingAvg = window.styled.div`
display: flex;
align-items: center;
column-gap: 10px;
font-size: 12px;
`;

// RATING BAR

export const BarContainer = window.styled.div`
display: flex;
width: 125px;
`;

export const BarGray = window.styled.div`
background: lightgray;
width: 125px;
height: 4px;
border-radius: 20px;
`;

export const BarBlack = window.styled.div`
background: black;
width: 125px;
height: 4px;
border-radius: 20px;
margin-left: -100%;
`;

// STAR

export const PinkStar = window.styled(Star)`
color: #FF385C;
width: 20px;
`;

export const ModalPinkStar = window.styled(Star)`
color: #FF385C;
width: 28px;
`;