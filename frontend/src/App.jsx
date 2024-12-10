import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="bg-primar text-tertiary">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
