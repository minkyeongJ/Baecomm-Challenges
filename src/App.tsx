import { RecoilRoot } from "recoil";
import ProductList from "./pages/ProductList";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RecoilRoot>
        <ProductList />
      </RecoilRoot>
    </>
  );
}

export default App;
