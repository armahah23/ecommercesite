import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container">
      <div>
        {/* logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" height={66} width={66} />
          </Link>
          {/* navbar */}
          <Navbar />
          {/* buttons */}
          <div>Buttons</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
