import { ProductItem } from "../../helper/types/products";
import * as S from "./ProductListItem.styled";
interface Props {
  product: ProductItem;
}

const ProductListItem = ({ product }: Props) => {
  return (
    <S.Li key={product.id}>
      <S.Thumbnail src={product.thumbnail} alt={product.title} />
      <S.BrandTitleContainer className="brand-title">
        <S.Brand>{product.brand}</S.Brand>
        <S.Title>{product.title}</S.Title>
      </S.BrandTitleContainer>
      <S.Price>${product.price}</S.Price>
    </S.Li>
  );
};

export default ProductListItem;
