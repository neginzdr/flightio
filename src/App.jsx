import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import SingleProductPage from "./pages/SingleProductPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/shopping/:id" element={<ShoppingCartPage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
