import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const SearchBarContainer = styled.section`
  text-align: center;
`;

export const ProductContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const MoreButtonContainer = styled.section`
  text-align: center;
`;

export const MoreButton = styled.button`
  width: 100px;
  color: gray;
  font-size: large;
  font-weight: 900;
  margin-top: 30px;
`;
