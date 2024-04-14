import { Form, useLoaderData } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { ProductListLoader } from "../../types/products";
import { Link } from "react-router-dom";
import { PRODUCT_DETAIL_ROUTE } from "../../helper/constants/routes";

const ProductList = () => {
  const { loaderProducts, query } = useLoaderData() as ProductListLoader;

  return (
    <>
      <h1>상품리스트</h1>
      <section>
        <Form id="search-form" role="search">
          <SearchBar id="search" name="search" query={query} />
        </Form>
      </section>
      <section>
        {loaderProducts?.products?.map((product) => (
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
      </section>
    </>
  );
};

export default ProductList;
