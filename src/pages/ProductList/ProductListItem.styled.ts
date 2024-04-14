import styled from "styled-components";

export const Li = styled.li`
  border-bottom: solid 1px lightgrey;
  padding-bottom: 10px;
  &:hover {
    .brand-title {
      background-color: blue;
      color: white;
    }
  }
`;

export const BrandTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5px;
  cursor: pointer;
`;

export const Brand = styled.p`
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Title = styled.p`
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Price = styled.p`
  font-weight: 900;
`;
