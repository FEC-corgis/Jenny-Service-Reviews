import styled from 'styled-components';

// FRONT PAGE

export const Container = styled.div`
  display: grid;
  font-family: Arial, Helvetica, sans-serif;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Nunito Sans', sans-serif;
`;

// AVERAGES

export const Overall = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const ContainerAvgs = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
line-height: 35px;
`;

export const Rating = styled.div`
  text-align: right;
`;

// REVIEWS

export const ContainerReviews = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 10%;
`;

export const ContainerUserReview = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-template-areas:
  "pic name"
  "desc desc";
`;

export const Pic = styled.div`
  grid-area: pic;
`;

export const Name = styled.div`
  grid-area: name;
  text-align: left;
`;

export const FirstName = styled.div`
  font-weight: 700;
`;

export const Date = styled.div`
  color: gray;
  font-size: 13px;
`;

export const Description = styled.div`
  grid-area: desc;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 60px;
`;

// MODAL

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalBody = styled.div`
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

export const ModalX = styled.div`
  text-align: left;
  top: 20px;
  margin: 20px;
  grid-area: modal-X;
  cursor: pointer;
`;

export const ModalAvgs = styled.div`
  grid-area: modal-avgs;
`;

export const ModalSearch = styled.div`
  grid-area: modal-search;
`;

export const ModalReviews = styled.div`
  grid-area: modal-reviews;
  overflow: scroll;
`;

export const ModalContainerAvgs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  margin: 20px;
`;