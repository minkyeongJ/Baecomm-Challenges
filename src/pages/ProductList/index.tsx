import useProductList from "../../hooks/useProductList";

const ProductList = () => {
  const { productList } = useProductList();

  return (
    <>
      <h1>상품리스트</h1>
      <section>검색창</section>
      <section>
        {productList.products?.map((product) => (
          <div>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.brand}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProductList;
