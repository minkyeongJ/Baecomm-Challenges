import { RecoilRoot } from "recoil";
import ProductList from "./pages/ProductList";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <ProductList />
      </RecoilRoot>
    </>
  );
}

export default App;
