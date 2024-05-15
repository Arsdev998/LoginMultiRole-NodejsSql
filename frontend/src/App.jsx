import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Products from "./pages/Products";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/AddUser";
import EditProducts from "./pages/EditProducts";
import AddProducts from "./pages/AddProducts";
import UserDP from "./pages/UserDP";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/users/detail/:id" element={<UserDP />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProducts />} />
          <Route path="/products/edit/:id" element={<EditProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
