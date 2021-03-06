import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="*" element={<Navigate replace to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route
          path="/welcome/new-user"
          element={<p>Welcome, new user!</p>}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productId" element={<ProductDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
