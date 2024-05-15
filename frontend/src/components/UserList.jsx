import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getUser();
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center px-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Users
      </h1>
      <h2 className="text-2xl text-gray-600 mb-6 text-center">List of Users</h2>
      <Link
        to={"/users/add"}
        className="bg-green-500 max-w-max text-white px-4 py-2 rounded-md hover:bg-green-600 mb-2"
      >
        Add New
      </Link>
      <div className="w-full max-w-4xl">
        <table className="min-w-[1200px] bg-white shadow-md rounded-lg ">
          <thead>
            <tr className="bg-gray-200 text-left text-salte-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6">No</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Role</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-slate-900 text-sm font-light ">
            {users.map((user, index) => (
              <tr
                key={user.uuid}
                className="border-b border-gray-200"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="py-3 px-6 text-left ">
                  {" "}
                  <Link className="hover:text-green-400" to={`/users/detail/${user.uuid}`}>{user.name} </Link>
                </td>
                <td className="py-3 px-6 text-left">{user.email}</td>
                <td className="py-3 px-6 text-left">{user.role}</td>
                <td className="py-3 px-6 text-left">
                  <Link
                    to={`/users/edit/${user.uuid}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.uuid)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* Repeat <tr> elements for more users */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
