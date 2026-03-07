import React, { useState } from "react";

const UserManagements = () => {
  const users = [
    {
      _id: 23432,
      name: "Jhon Kon",
      email: "jhonkon@gmail.com",
      role: "admin",
    },
  ];

  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleFormSubmit = (e) => {
    const value = e.target.value;
    // console.log(e, " ", value)
    const newForm = { ...formData, [e.target.name]: value };
    setFormdata(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormdata({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };

  const handleChangeRole = (userID, userRole) => {
    console.log(userID, userRole);
  };

  const handleDeleteUser = (userID) => {
    // console.log(userID)
    if (window.confirm("Are you sure you want to delete this user ? ")) {
      console.log("UserId", userID);
    }
  };


  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      {/* add user form */}
      <div className="p-6 mb-4">
        <h3 className="text-xl font-semibold mb-4">Add new user</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-500 mb-1.5">Name</label>
            <input
              className="p-2 border border-gray-200 focus:outline-none w-full "
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormSubmit}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 mb-1.5">Email</label>
            <input
              className="p-2 border border-gray-200 focus:outline-none w-full "
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormSubmit}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 mb-1.5">Password</label>
            <input
              className="p-2 border border-gray-200 focus:outline-none w-full "
              type="password"
              name="password"
              value={formData.password}
              onChange={handleFormSubmit}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 mb-1.5">Role</label>
            <select
              className="p-2 w-full border border-gray-200 focus:outline-none rounded"
              name="role"
              onChange={handleFormSubmit}
              value={formData.role}
              id=""
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="rounded px-4 py-2 bg-green-500 text-white hover:bg-green-600"
          >
            Add User
          </button>
        </form>
      </div>

      {/* User table */}
      <div className="overflow-x-auto rounded shadow-md">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xm text-gray-700">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, idx) => (
                <tr key={idx} className="hover:border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">
                    <select
                      onChange={(e) =>
                        handleChangeRole(user._id, e.target.value)
                      }
                      value={user.role}
                      className="p-2 border border-gray-200"
                      name=""
                      id=""
                    >
                      <option value="admin">Admin</option>
                      <option value="customer">Customer</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="px-3 py-2 text-white bg-red-500 hover:bg-red-600 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center px-4 py-3">
                  No user available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagements;
