import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="bg-primar text-tertiary">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mens" element={<Category />} />
            <Route path="/womens" element={<Category />} />
            <Route path="/kids" element={<Category />} />
            <Route path="/product" element={<Product />} >
              <Route path=":ProductId" element={<Product />} />
            </Route>
            <Route path="/cart-page" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
