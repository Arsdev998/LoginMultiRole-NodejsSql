import React from "react";

const UserList = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Users</h1>
      <h2 className="text-2xl text-gray-600 mb-6">List of Users</h2>
      <div className="w-full max-w-4xl">
        <table className="min-w-[1300px] bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left text-salte-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6">No</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Role</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-slate-900 text-sm font-light">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">1</td>
              <td className="py-3 px-6 text-left">John Doe</td>
              <td className="py-3 px-6 text-left">john.doe@example.com</td>
              <td className="py-3 px-6 text-left">Admin</td>
              <td className="py-3 px-6 text-left">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Edit
                </button>
              </td>
            </tr>
            {/* Repeat <tr> elements for more users */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
