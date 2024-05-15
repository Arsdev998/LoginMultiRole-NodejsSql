import React from "react";
import { Link } from "react-router-dom";
import { IoPerson, IoPricetag, IoLogOut, IoHome } from "react-icons/io5";

const Sidebar = () => {
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
        <p className="menu-label text-lg font-semibold mb-2">Settings</p>
        <ul className="menu-list">
          <li>
            <button className=" flex items-center gap-2 centerblock w-full px-4 py-2 bg-slate-700 rounded-md hover:bg-slate-800">
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
