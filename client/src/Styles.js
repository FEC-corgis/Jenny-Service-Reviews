// import styled from 'styled-components';
import { Star } from '@styled-icons/boxicons-solid/Star'

// FRONT PAGE

export const Container = window.styled.div`
  display: grid;
  font-family: Arial, Helvetica, sans-serif;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Nunito Sans', sans-serif;
`;

// AVERAGES

export const Overall = window.styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const ContainerAvgs = window.styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
line-height: 35px;
`;

export const Rating = window.styled.div`
  text-align: right;
`;

// REVIEWS

export const ContainerReviews = window.styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 10%;
`;

export const ContainerUserReview = window.styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
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
  height: 80%;
  margin: 40px auto;
  text-align: center;
  display: grid;
  grid-template-columns: 50% 50%;
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
`;

export const ModalSearch = window.styled.div`
  grid-area: modal-search;
`;

export const ModalReviews = window.styled.div`
  grid-area: modal-reviews;
  overflow: scroll;
  text-align: left;
`;

export const ModalContainerAvgs = window.styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  margin: 20px;
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