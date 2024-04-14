import styled from "styled-components";
import { ProductItem } from "../../types/products";

const Li = styled.li`
  border-bottom: solid 1px lightgrey;
  padding-bottom: 10px;
  &:hover {
    .brand-title {
      background-color: blue;
      color: white;
    }
  }
`;

const BrandTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5px;
  cursor: pointer;
`;

const Brand = styled.p`
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Title = styled.p`
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Price = styled.p`
  font-weight: 900;
`;

interface Props {
  product: ProductItem;
}

const ProductListItem = ({ product }: Props) => {
  return (
    <Li key={product.id}>
      <Thumbnail src={product.thumbnail} alt={product.title} />
      <BrandTitleContainer className="brand-title">
        <Brand>{product.brand}</Brand>
        <Title>{product.title}</Title>
      </BrandTitleContainer>
      <Price>${product.price}</Price>
    </Li>
  );
};

export default ProductListItem;
