import { Form, NavLink } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { PRODUCT_DETAIL_ROUTE } from "../../helper/constants/routes";
import useProductList from "../../hooks/useProductList";
import ProductListItem from "./ProductListItem";
import * as S from "./Style.styled";

const ProductList = () => {
  const { productList, searchQuery, isMore, getMoreProduct } = useProductList();

  return (
    <S.Div>
      <S.Wrapper>
        <S.SearchBarContainer>
          <Form id="search-form" role="search">
            <SearchBar id="search" name="search" query={searchQuery} />
          </Form>
        </S.SearchBarContainer>
        <S.ProductContainer>
          {productList?.products?.map((product) => (
            <NavLink
              to={PRODUCT_DETAIL_ROUTE(product.id)}
              key={product.id}
              preventScrollReset={true}
            >
              <ProductListItem product={product} />
            </NavLink>
          ))}
        </S.ProductContainer>
        <S.MoreButtonContainer>
          {isMore && (
            <S.MoreButton type="button" onClick={getMoreProduct}>
              더보기
            </S.MoreButton>
          )}
        </S.MoreButtonContainer>
      </S.Wrapper>
    </S.Div>
  );
};

export default ProductList;
