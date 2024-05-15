import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setrole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
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
  console.log(password);
  console.log(confPassword);
  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>
      <h2 className="text-xl font-semibold">Add New User</h2>
      <p className="text-center">{msg}</p>
      <div className="shadow-none">
        <div className="p-6">
          <div>
            <form onSubmit={saveUser}>
              <p className="text-center"></p>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md"
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
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={role}
                    onChange={(e) => setrole(e.target.value)}
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
                    Save
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

export default FormAddUser;
