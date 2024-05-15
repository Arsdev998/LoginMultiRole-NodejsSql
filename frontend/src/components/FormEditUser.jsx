import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FormEditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("")
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=>{
    const getProductsById = async()=>{
        try {
            const response = await axios.get(`http://localhost:5000/users/${id}`);
            setName(response.data.name)
            setEmail(response.data.email)
            setRole(response.data.role)
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }
    getProductsById();
  },[id])

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>
      <h2 className="text-xl font-semibold">Update User</h2>
      <div className="shadow-none">
        <div className="p-6">
          <div>
            <form onSubmit={updateUser}>
              <p className="text-center">{msg}</p>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <div>
                  <input
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <div>
                  <input
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <div>
                  <input
                    type="password"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <div>
                  <input
                    type="password"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="******"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Role</label>
                <div>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditUser;
