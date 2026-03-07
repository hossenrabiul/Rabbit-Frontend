import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchBarToggle = () => {
    setIsOpen(!isOpen);
  };

  const searchHandle = (e)=>{
    e.preventDefault();
    console.log(searchTerm)
    setIsOpen(false)
    setSearchTerm("")
  }
  return (
    <div
      className={`flex justify-center items-center w-full transition-all duration-300 ${
        isOpen
          ? "absolute top-0 left-0 w-full h-26 bg-white z-50"
          : "w-auto"
      }`}
    >
      {isOpen ? (
        <form onSubmit={searchHandle} className="relative w-full flex items-center justify-center">
          <div className="relative w-1/2">
            <input
              type="text"
              name=""
              id=""
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none placeholder:text-gray-700 w-full"
            />
            <button type="submit" className="absolute right-2 top-4  text-gray-600 hover:text-gray-900 transform -translate-y-2">
              <HiMagnifyingGlass className="h-6 w-6"/>
            </button>
          </div>

          <button onClick={searchBarToggle} className="absolute -top-3 left-22 md:left-44 lg:left-85">
              <IoIosClose className="w-6 h-6 bg-gray-700 px-1 py-0.5 text-white rounded-full" />
            </button>
        </form>
      ) : (
        <button onClick={searchBarToggle}>
          <HiMagnifyingGlass className="ml-2 w-6 h-6 text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
