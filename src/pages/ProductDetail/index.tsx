import { useNavigate } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";
import styled from "styled-components";

const BackButton = styled.button`
  background-color: #f1f1f1;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductThumbnail = styled.img`
  max-width: 100%;
  height: auto;
`;
const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductInfo = styled.div`
  text-align: center;
`;

const ProductBrand = styled.h1`
  color: #333;
`;
const ProductTitle = styled.h1`
  color: #333;
`;

const ProductPrice = styled.p`
  color: #666;
`;

const ProductDescription = styled.p`
  color: #999;
`;

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productDetail } = useProductDetail();

  return (
    <>
      <section>
        <BackButton
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          ← 뒤로가기
        </BackButton>
      </section>
      <ProductDetails>
        <ProductThumbnail
          src={productDetail.thumbnail}
          alt={`${productDetail.title} 이미지`}
        />
        <ProductInfo>
          <ProductBrand>{productDetail.brand}</ProductBrand>
          <ProductTitle>{productDetail.title}</ProductTitle>
          <ProductPrice>${productDetail.price}</ProductPrice>
          <ProductDescription>{productDetail.description}</ProductDescription>
        </ProductInfo>
        <div className="product-images">
          {productDetail.images.map((image, i) => (
            <ProductImage
              src={image}
              alt={`${i}번째 ${productDetail.title} 이미지`}
              key={`${image}_${i}`}
            />
          ))}
        </div>
      </ProductDetails>
    </>
  );
};

export default ProductDetail;
