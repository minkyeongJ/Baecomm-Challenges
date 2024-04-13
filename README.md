# Baecomm-Challenges
배포링크 : https://baecomm-challenges.vercel.app/ 

# 프로젝트 목표
배컴 프론트엔드 개발자 사전과제입니다.
상품을 검색하고 상세내용을 확인할 수 있는 기능을 구현합니다.

# 기술스택 및 선택이유
- 언어: Typescript
- 프레임워크 및 라이브러리: React.js
- 라우팅: React-router
- 스타일: Styled-component
  - CSS-in-js에서 제일 널리 사용되고 있어 선택하였습니다.
- 상태관리 툴: recoil
  - 프로젝트 규모가 작고 Component가 렌더링 되는 시기 상태를 세밀하게 제어할 수 있어 선택하였습니다.

# 구현 화면

# 프로젝트 요구사항
0. API

- [ ] 다음 사이트에 있는 API를 사용한다. https://dummyjson.com/docs/products

1. 상품 목록 페이지

- [ ] 페이지 상단에 검색어를 입력할 수 있는 input과 "검색" 버튼이 있다.

  - [ ] 검색어를 입력하고 "검색"을 클릭하면 검색 결과가 반영된 목록이 표시된다.
  
  - [ ] 검색어를 입력하고 엔터 키를 입력하면 "검색"버튼 클릭과 동일하게 동작한다.
  
- [ ] 검색창 아래에 상품 목록이 있다.

  - [ ] 최초 접속 시 10개의 상품을 출력한다.
  
  - [ ] 한 행에 상품을 2개씩 배치한다.

  - [ ] 각 상품의 thumbnail image, brand, title, price를 보여준다.
  
  - [ ] 각 항복은 세로로 순서대로 표시하되, brand, title은 같은 행에 표시한다.
  
  - [ ] 상품 표시 영역에 마우스를 올리면 brand, title 행의 색상이 파란색으로 표시된다.
  
  - [ ] 상품을 클릭하면 해당 상품의 상세 페이지로 이동한다.
  
- [ ] 목록 하단에는 "더보기" 버튼이 있다.

  - [ ] 버튼을 클릭할 때마다 상품 목록에서 10개의 상품을 추가로 보여준다.
  
  - [ ] 더 표시할 상품이 있을 때에만 버튼이 표시된다.
  
2. 상품 상세 페이지

- [ ] 페이지 상단에 "목록으로 돌아가기" 버튼이 있다.

  - [ ] 버튼을 클릭하면 상품 목록 페이지로 이동한다.
  
  - [ ] 목록 화면에서 검색 기능 사용 후 상세 페이지로 이동한 경우, 목록으로 돌아가면 검색어와 검색 결과, 스크롤 위치가 유지된다.
  
  - [ ] "목록으로 돌아가기" 버튼 아래에 상품 상세 정보가 표시된다.
  
  - [ ] 목록에서 선택한 상품의 thumbnail image, brand, title, price, description과 images 배열의 각 image가 모두 표시된다.

# 트러블 슈팅

# 목업
![image](https://github.com/minkyeongJ/Baecomm-Challenges/assets/67677374/023ca380-44db-4439-948b-b1004c30b061)
