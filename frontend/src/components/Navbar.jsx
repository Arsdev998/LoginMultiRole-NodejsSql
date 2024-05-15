import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-8 lg:px-24">
      <nav className="flex items-center justify-between rounded-md bg-slate-600 shadow-md p-4">
        <Link to="/dashboard">
          <img src={logo} alt="logo" className="h-12" />
        </Link>
        <button className="text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-md">
          Log out
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
