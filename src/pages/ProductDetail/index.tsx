import { useNavigate } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackButton = styled.button`
  width: 70%;
  font-size: medium;
  background-color: #f1f1f1;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
`;

const ProductDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ProductThumbnail = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: solid 1px lightgrey;
  padding-top: 30px;
`;

const ProductBrand = styled.p`
  color: #333;
`;
const ProductTitle = styled.h3`
  font-size: large;
`;

const ProductPrice = styled.p`
  font-size: xx-large;
  font-weight: 900;
`;

const ProductDescription = styled.p``;

const ProductImages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productDetail } = useProductDetail();

  return (
    <Wrapper>
      <BackButton
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        목록으로 돌아가기
      </BackButton>
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
        <ProductImages>
          {productDetail?.images?.map((image, i) => (
            <ProductImage
              src={image}
              alt={`${i}번째 ${productDetail.title} 이미지`}
              key={`${image}_${i}`}
            />
          ))}
        </ProductImages>
      </ProductDetails>
    </Wrapper>
  );
};

export default ProductDetail;
