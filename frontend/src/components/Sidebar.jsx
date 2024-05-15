import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Logout, reset } from "../features/authSlice";
import { IoPerson, IoPricetag, IoLogOut, IoHome } from "react-icons/io5";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(Logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div>
      <aside className="menu shadow-md bg-slate-600 text-white p-4 min-w-[250px]">
        <p className="menu-label text-lg font-semibold mb-2">General</p>
        <ul className="menu-list mb-4">
          <li className="mb-2">
            <Link
              to="/dashboard"
              className=" px-4 py-2 rounded-md hover:bg-slate-800 flex items-center gap-2"
            >
              <IoHome />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className=" px-4 py-2 rounded-md hover:bg-slate-800 flex items-center gap-2"
            >
              <IoPricetag />
              Products
            </Link>
          </li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label text-lg font-semibold mb-2">Admin</p>
            <ul className="menu-list mb-4">
              <li>
                <Link
                  to="/users"
                  className=" flex items-center gap-2 centerblock px-4 py-2 rounded-md hover:bg-slate-800"
                >
                  <IoPerson />
                  Users
                </Link>
              </li>
            </ul>
          </div>
        )}

        <p className="menu-label text-lg font-semibold mb-2">Settings</p>
        <ul className="menu-list">
          <li>
            <button
              onClick={logout}
              className=" flex items-center gap-2 centerblock w-full px-4 py-2 bg-slate-700 rounded-md hover:bg-slate-800"
            >
              <IoLogOut />
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
