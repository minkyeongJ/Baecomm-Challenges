# Baecomm-Challenges

배포링크 : https://baecomm-challenges.vercel.app/
```
## 실행 방법
$ npm start
```
# 1. 프로젝트 목표

배컴 프론트엔드 개발자 사전과제입니다.
상품을 검색하고 상세내용을 확인할 수 있는 기능을 구현합니다.

# 2. 기술스택 및 선택이유

- 언어: Typescript
- 프레임워크 및 라이브러리: React.js
- 라우팅: React-router
- 스타일: Styled-component
  - CSS-in-js에서 제일 널리 사용되고 있어 선택하였습니다.
- 상태관리 툴: recoil
  - 프로젝트 규모가 작고 보일러플레이트가 간단하여 선택하였습니다.

# 3. 파일트리

```
📦src
 ┣ 📂apis //api 통신
 ┣ 📂components //공통 컴포넌트 관련 파일
 ┣ 📂helper
 ┃ ┣ 📂constants
 ┃ ┣ 📂types
 ┃ ┗ 📂utils
 ┣ 📂hooks //page 별 비즈니스 로직
 ┣ 📂pages //page 관련 파일
 ┃ ┣ 📂ProductDetail
 ┃ ┗ 📂ProductList
 ┣ 📂recoil //recoil 관련 파일
 ┃ ┗ 📂atoms
 ┣ 📂styles //공통 스타일 관련 파일
 ┣ 📜App.tsx
 ┣ 📜error-page.jsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

# 4. 구현 화면

## 4.1. 검색
![search](https://github.com/minkyeongJ/Baecomm-Challenges/assets/67677374/01c0cb11-bb38-4058-b376-65d3b383ae3e)

## 4.2. 더보기
![more-item](https://github.com/minkyeongJ/Baecomm-Challenges/assets/67677374/89dd9f24-4d64-402b-879d-ea123edcca44)

## 4.3. 상품 상세페이지
![product-detail](https://github.com/minkyeongJ/Baecomm-Challenges/assets/67677374/a4df7689-5e59-467d-9dbc-7fe42774e422)

## 4.4. 목록으로 돌아가기
![back-list](https://github.com/minkyeongJ/Baecomm-Challenges/assets/67677374/a9674e82-ed70-4e5c-b37b-bed367b2feca)


# 5. 프로젝트 요구사항

## 5.1. API

- [x] 다음 사이트에 있는 API를 사용한다. https://dummyjson.com/docs/products

## 5.2. 상품 목록 페이지

- [x] 페이지 상단에 검색어를 입력할 수 있는 input과 "검색" 버튼이 있다.

  - [x] 검색어를 입력하고 "검색"을 클릭하면 검색 결과가 반영된 목록이 표시된다.

  - [x] 검색어를 입력하고 엔터 키를 입력하면 "검색"버튼 클릭과 동일하게 동작한다.

- [x] 검색창 아래에 상품 목록이 있다.

  - [x] 최초 접속 시 10개의 상품을 출력한다.

  - [x] 한 행에 상품을 2개씩 배치한다.

  - [x] 각 상품의 thumbnail image, brand, title, price를 보여준다.

  - [x] 각 항복은 세로로 순서대로 표시하되, brand, title은 같은 행에 표시한다.

  - [x] 상품 표시 영역에 마우스를 올리면 brand, title 행의 색상이 파란색으로 표시된다.

  - [x] 상품을 클릭하면 해당 상품의 상세 페이지로 이동한다.

- [x] 목록 하단에는 "더보기" 버튼이 있다.

  - [x] 버튼을 클릭할 때마다 상품 목록에서 10개의 상품을 추가로 보여준다.

  - [x] 더 표시할 상품이 있을 때에만 버튼이 표시된다.

## 5.3. 상품 상세 페이지

- [x] 페이지 상단에 "목록으로 돌아가기" 버튼이 있다.

  - [x] 버튼을 클릭하면 상품 목록 페이지로 이동한다.

  - [x] 목록 화면에서 검색 기능 사용 후 상세 페이지로 이동한 경우, 목록으로 돌아가면 검색어와 검색 결과, 스크롤 위치가 유지된다.

  - [x] "목록으로 돌아가기" 버튼 아래에 상품 상세 정보가 표시된다.

  - [x] 목록에서 선택한 상품의 thumbnail image, brand, title, price, description과 images 배열의 각 image가 모두 표시된다.

# 6. 트러블 슈팅

## Recoil selector를 사용하여 productList 업데이트시 mounted 시점 에러

### 1) 문제 배경

- 에러메시지
  - Warning: Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.
  - 컴포넌트가 마운트 되기 전에 실행되어 사이드이펙트 발생 위험으로 이슈 발생
- 문제 코드
  - `const loadProductList = useRecoilValue(loadProductListSelector);`

### 2) 해결 방법

- 관련 에러 메시지를 구글링하여 관련 자료 탐색
  - https://recoiljs.org/docs/api-reference/core/selector/
  - https://stackoverflow.com/questions/56442582/react-hooks-cant-perform-a-react-state-update-on-an-unmounted-component
  - https://leego.tistory.com/entry/recoil과-비동기-데이터-호출-선언적-프로그래밍
- Suspense를 사용하여 데이터 로딩 완료 후 컴포넌트 렌더링 하도록 코드 수정
  - 페이지 로딩 및 목록 데이터를 저장하는데 어려움 발생
- selector로 선언하여 호출하는 방법에서 커스텀훅에서 productList 업데이트 하는 함수를 작성하는 방식으로 방법 변경

  ```
  const getMoreProduct = async (e: React.MouseEvent) => {
    e.preventDefault();
    const newProductList = await fetchSelectProductList({
      query: searchQuery,
      limit: PRODUCT_LIMIT,
      skip: productList?.products?.length,
    });

    if (newProductList) {
      setProductList({
        products: [...productList.products, ...newProductList.products],
        total: newProductList.total,
        skip: newProductList.skip,
        limit: newProductList.limit,
      });
    }
  };
  ```

### 3) 결과 및 배운점

- 기능을 구현하는 데 어떤 방식이 제일 적합한지 고민하고 피드백 받는 것이 중요하다는 것을 다시 깨달았습니다.
- Recoil의 사용방법에 대해 이해가 높아졌습니다.

# 7. 목업

![image](https://github.com/minkyeongJ/Baecomm-Challenges/assets/67677374/023ca380-44db-4439-948b-b1004c30b061)

# 8. 라우터

| page      | router              |
| --------- | ------------------- |
| 상품 목록 | /                   |
| 상품 상세 | /product/:productId |
