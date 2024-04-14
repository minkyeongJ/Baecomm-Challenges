import { Form, NavLink } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { PRODUCT_DETAIL_ROUTE } from "../../helper/constants/routes";
import useProductList from "../../hooks/useProductList";
import ProductListItem from "./ProductListItem";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const SearchBarContainer = styled.section`
  text-align: center;
`;

const ProductContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const MoreButtonContainer = styled.section`
  text-align: center;
`;

const MoreButton = styled.button`
  width: 100px;
  color: gray;
  font-size: large;
  font-weight: 900;
  margin-top: 30px;
`;

const ProductList = () => {
  const { productList, searchQuery, isMore, getMoreProduct } = useProductList();

  return (
    <Div>
      <Wrapper>
        <SearchBarContainer>
          <Form id="search-form" role="search">
            <SearchBar id="search" name="search" query={searchQuery} />
          </Form>
        </SearchBarContainer>
        <ProductContainer>
          {productList?.products?.map((product) => (
            <NavLink to={PRODUCT_DETAIL_ROUTE(product.id)} key={product.id}>
              <ProductListItem product={product} />
            </NavLink>
          ))}
        </ProductContainer>
        <MoreButtonContainer>
          {isMore && (
            <MoreButton type="button" onClick={getMoreProduct}>
              더보기
            </MoreButton>
          )}
        </MoreButtonContainer>
      </Wrapper>
    </Div>
  );
};

export default ProductList;
