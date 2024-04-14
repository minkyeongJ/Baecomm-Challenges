import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackButton = styled.button`
  width: 70%;
  font-size: medium;
  background-color: #f1f1f1;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
`;

export const Details = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: solid 1px lightgrey;
  padding-top: 30px;
`;

export const Brand = styled.p`
  color: #333;
`;
export const Title = styled.h3`
  font-size: large;
`;

export const Price = styled.p`
  font-size: xx-large;
  font-weight: 900;
`;

export const Description = styled.p``;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
