import React from "react";
import logo from "../assets/logo.png";
import { useNavigate,Link } from "react-router-dom";
import { Logout, reset } from "../features/authSlice";
import { useDispatch,useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user} = useSelector((state => state.auth));

  const logout = ()=>{
    dispatch(Logout());
    dispatch(reset());
    navigate('/')
  }
  return (
    <div className="">
      <nav className="flex items-center justify-between bg-slate-600 shadow-md p-8">
        <Link to="/dashboard">
          <img src={logo} alt="logo" className="h-12" />
        </Link>
        <button onClick={logout} className="text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-md">
          Log out
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
