import { Form, Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { PRODUCT_DETAIL_ROUTE } from "../../helper/constants/routes";
import useProductList from "../../hooks/useProductList";

const ProductList = () => {
  const { productList, searchQuery, isMore, getMoreProduct } = useProductList();

  return (
    <>
      <h1>상품리스트</h1>
      <section>
        <Form id="search-form" role="search">
          <SearchBar id="search" name="search" query={searchQuery} />
        </Form>
      </section>
      <section>
        {productList?.products?.map((product) => (
          <li key={product.id}>
            <Link to={PRODUCT_DETAIL_ROUTE(product.id)}>
              <div key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.brand}</p>
                <p>{product.title}</p>
                <p>{product.price}</p>
              </div>
            </Link>
          </li>
        ))}
        {isMore && (
          <button type="button" onClick={getMoreProduct}>
            더보기
          </button>
        )}
      </section>
    </>
  );
};

export default ProductList;
