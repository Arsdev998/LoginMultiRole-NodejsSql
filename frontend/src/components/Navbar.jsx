import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="px-[100px]">
      <nav className="flex justify-between bg-slate-900 shadow-md">
        <div className="">
        <Link>
          <img src={logo} alt="logo" className="h-[50px]"/>
        </Link>
        </div>
        <div className="">
          <button>Log out</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
