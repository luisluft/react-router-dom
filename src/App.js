import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;
