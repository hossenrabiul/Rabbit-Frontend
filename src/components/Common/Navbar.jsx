import React, { useState } from "react";
import {
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import MobileNavbar from "../Layout/MobileNavbar";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [navDrawOpen, setNavDrawOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { user, loading } = useContext(AuthContext);

  // Track scroll position for navbar background effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <p className="text-center py-6 text-gray-500 text-sm">Loading...</p>;
  }

  const toggleNavbar = () => {
    setNavDrawOpen(!navDrawOpen);
  };

  const toggleCartDrawer = () => {
    setCartDrawer(!cartDrawer);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Clothes", path: "/collections/all" },
    // { label: "Women", path: "/" },
    // { label: "Children", path: "/" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-white/80 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="container mx-auto px-5 py-4">
          <div className="flex justify-between items-center">
            {/* Left Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-3xl font-light tracking-wider text-gray-900 hover:text-gray-600 transition-colors duration-300 group"
              >
                <span className="font-serif">✨</span> Jewelry
              </Link>
            </div>

            {/* Center Navigation Links - Hidden on Mobile */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-xs font-semibold uppercase tracking-widest text-gray-600 hover:text-black transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Right Section - Icons & Auth */}
            <div className="flex items-center gap-6">
              {/* Search Icon (if SearchBar is not visible) */}
              {/* <button className="text-gray-700 hover:text-black transition-colors duration-300 p-2 hover:bg-gray-100 rounded-lg">
                <HiOutlineMagnifyingGlass className="w-5 h-5" />
              </button> */}

              {/* User / Auth Section */}
              {user ? (
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-black transition-colors duration-300 p-2 hover:bg-gray-100 rounded-lg group"
                  title="Profile"
                >
                  <HiOutlineUser className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </Link>
              ) : (
                <div className="hidden sm:flex items-center gap-3">
                  <Link
                    to="/login"
                    className="text-xs font-semibold uppercase tracking-widest text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-900 hover:text-black transition-all duration-300 hover:bg-gray-50"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-xs font-semibold uppercase tracking-widest text-white px-4 py-2 rounded-lg bg-black hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* Shopping Bag */}
              <Link to="/checkout">
                <button
                  onClick={toggleCartDrawer}
                  className="relative text-gray-700 hover:text-black transition-colors duration-300 p-2 hover:bg-gray-100 rounded-lg group"
                  title="Shopping Bag"
                >
                  <HiOutlineShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  {/* Uncomment to show cart count */}
                  {/* <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold shadow-lg">
                    4
                  </span> */}
                </button>
              </Link>

              {/* Search Bar */}
              <div className="hidden lg:block">
                <SearchBar />
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleNavbar}
                className="md:hidden text-gray-700 hover:text-black transition-colors duration-300 p-2 hover:bg-gray-100 rounded-lg"
                title={navDrawOpen ? "Close Menu" : "Open Menu"}
              >
                {navDrawOpen ? (
                  <HiXMark className="w-6 h-6" />
                ) : (
                  <HiBars3BottomRight className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Auth Links - Shown only on small screens when not logged in */}
          {!user && (
            <div className="sm:hidden flex gap-2 mt-4 pt-4 border-t border-gray-200">
              <Link
                to="/login"
                className="flex-1 text-center text-xs font-semibold uppercase tracking-widest text-gray-700 px-3 py-2 rounded-lg border border-gray-300 hover:border-gray-900 hover:text-black transition-all duration-300 hover:bg-gray-50"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="flex-1 text-center text-xs font-semibold uppercase tracking-widest text-white px-3 py-2 rounded-lg bg-black hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNavbar navDrawOpen={navDrawOpen} toggleNavbar={toggleNavbar} />

      {/* Global Styles */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Poppins:wght@400;500;600;700&display=swap");

        /* Optional: Update body font for luxury feel */
        /* body {
          font-family: "Poppins", sans-serif;
        } */
      `}</style>
    </>
  );
};

export default Navbar;
