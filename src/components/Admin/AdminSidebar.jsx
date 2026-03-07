import {
  FaBoxOpen,
  FaClipboard,
  FaSignOutAlt,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = ({ toggleSidebar, setIsOpenSidebar }) => {
  const navigate = useNavigate()
  const handleSignOut = () =>{
    navigate('/')
  }
  return (
    <div className="p-6">
      <div onClick={toggleSidebar} className="flex justify-end md:hidden">
        <button>
          <IoClose className="w-6 h-6"></IoClose>
        </button>
      </div>
      <div className="mb-6">
        <Link to={"/admin"} className="text-2xl font-medium cursor-pointer">
          Rabbit
        </Link>
      </div>
      <h1 className="mb-6 text-xl font-medium text-center">Admin Dashboard</h1>

      <nav className="flex flex-col space-y-2">
        <NavLink
          to={"/admin/users"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white px-4 py-2 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white rounded px-4 py-2 flex items-center space-x-2"
          }
        >
          <FaUser />
          <span>Users</span>
        </NavLink>
        <NavLink
          to={"/admin/products"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white px-4 py-2 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white rounded px-4 py-2 flex items-center space-x-2"
          }
        >
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>
        <NavLink
          to={"/admin/store"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white px-4 py-2 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white rounded px-4 py-2 flex items-center space-x-2"
          }
        >
          <FaStore />
          <span>Store</span>
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white px-4 py-2 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white rounded px-4 py-2 flex items-center space-x-2"
          }
        >
          <FaClipboard />
          <span>Shop</span>
        </NavLink>
      </nav>
      <div className="mt-6">
        <button 
        onClick={handleSignOut}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex justify-center items-center space-x-2">
          <FaSignOutAlt />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
