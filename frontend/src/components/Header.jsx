import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";

//imported images
import logo from "../assets/logo.png";
// import logout from "../assets/logout.svg";
import user from "../assets/user.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flexBetween items-center  py-3 max-xs:px-2">
        {/* logo */}
        <Link to="/">
          <img src={logo} alt="Logo" height={66} width={88} />
        </Link>
        {/* navbar desktop */}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-10 medium-15"}
        />
        {/* navbar mobile */}
        <Navbar
          containerStyles={`${
            menuOpen
              ? "flexStart flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 "
              : "flexStart flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />
        {/* buttons */}
        <div className="flexBetween sm:gap-x-3 bold-16">
          {!menuOpen ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween sm:gap-x-6">
            <NavLink to={"cart-page"} className={"flex"}>
              <FaOpencart className="p-1 w-8 h-8 ring-slate-900/30 ring-1 rounded-full" />
              <span className="relative flexCenter w-5 h-5 bg-orange-500 text-white rounded-full medium-14 -top-2 ">
                0
              </span>
            </NavLink>
            
            <NavLink
              to={"login"}
              className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}
            >
              <img src={user} alt="userIcon" height={19} width={19} />
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
