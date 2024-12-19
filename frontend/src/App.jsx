import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
//images
import bannermen from "./assets/bannermens.png";
import bannerwomen from "./assets/bannerwomens.png";
import bannerkid from "./assets/bannerkids.png";

function App() {
  return (
    <>
      <main className="bg-primar text-tertiary">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mens" element={<Category category="men" banner={bannermen}/>} />
            <Route path="/womens" element={<Category category="women" banner={bannerwomen}/>} />
            <Route path="/kids" element={<Category category="kid" banner={bannerkid}/>} />
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
