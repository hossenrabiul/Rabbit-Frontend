import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";

const FilterSideber = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("seachrparama", searchParams)

  const { categories, loading } = useCategories();

  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    metarial: [],
    brand: [],
    min_price: 0,
    max_price: 100,
  });

  const [priceRange, setPriceRange] = useState([]);

  const category = loading ? [] : categories?.data?.map((item) => item);
  // const category = ["Top Wear", "Bottom Wear"];
  // const gender = ["Men", "Women"];
  const colors = ["white", "red", "black", "green", "gray", "yellow"];
  const sizes = ["X", "M", "L", "XL", "XXL"];
  // const metarials = ["cotton", "no-cotton"];
  // const brands = ["gucci", "shoilpik", "bata"];

  useEffect(() => {
    const params = Object.fromEntries(searchParams);
    // console.log("params'", params.size)
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      metarial: params.metarial ? params.metarial.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      min_price: params.min_price || 0,
      max_price: params.max_price || 100,
    });

    setPriceRange([0, params.max_price || 100]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    // console.log({name, value, type, checked})
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...newFilters[name], value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }

    setFilters(newFilters);
    updateURLParams(newFilters);
    // console.log(newFilters);
  };

  const handlePriceChange = (e) => {
    const new_price = e.target.value;
    setPriceRange([0, new_price]);
    const newFilters = { ...filters, min_price: 0, max_price: new_price };
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (key === "category" && newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    // Object.keys(newFilters).forEach((key) => {
    //   if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
    //     params.append(key, newFilters[key].join(","));
    //   } else if (newFilters[key]) {
    //     params.append(key, newFilters[key]);
    //   }
    // });
    // console.log("params url ",params.toString())
    setSearchParams(params);
    // navigate(`?${params.toString()}`)
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Filter</h2>
      {/* Category */}
      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-600">Category</label>
        {category.map((category, idx) => (
          <div key={idx} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              id=""
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="w-4 h-4 mr-2 text-blue-500 focus:ring-blue-400 border-gray-200"
            />
            <span className="text-[17px] font-medium">{category}</span>
          </div>
        ))}
      </div>
      {/* Gender */}
      {/* <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-600">Gender</label>
        {gender.map((gender, idx) => (
          <div key={idx} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              id=""
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender === gender}
              className="w-4 h-4 mr-2 text-blue-500 focus:ring-blue-400 border-gray-200"
            />
            <span className="text-[17px] font-medium">{gender}</span>
          </div>
        ))}
      </div> */}

      {/* Color */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color, idx) => (
            <button
              name="color"
              key={idx}
              style={{ background: color.toLowerCase() }}
              value={color}
              onClick={handleFilterChange}
              className={`w-8 h-8 rounded-full border border-gray-300 transition cursor-pointer hover:scale-105 ${filters.color === color && "ring-2 ring-blue-500"}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              value={size}
              onChange={handleFilterChange}
              type="checkbox"
              name="size"
              id=""
              checked={filters.size.includes(size)}
              className="w-4 h-4 border text-blue-500 focus:ring-blue-600 border-gray-400 mr-2"
            />
            <span>{size}</span>
          </div>
        ))}
      </div>
      {/* Material */}
      {/* <div className="mb-6">
        <label className="block  text-gray-600 font-medium mb-2">
          Material
        </label>
        {metarials.map((metarial, idx) => (
          <div key={idx} className="flex items-center mb-1">
            <input
              value={metarial}
              onChange={handleFilterChange}
              type="checkbox"
              name="metarial"
              id=""
              checked={filters.metarial.includes(metarial)}
              className="w-4 h-4 border text-blue-500 focus:ring-blue-600 border-gray-400 mr-2"
            />
            <span>{metarial}</span>
          </div>
        ))}
      </div> */}
      {/* Brands */}
      {/* <div className="mb-6">
        <label className="block  text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand, idx) => (
          <div key={idx} className="flex items-center mb-1">
            <input
              value={brand}
              onChange={handleFilterChange}
              type="checkbox"
              name="brand"
              id=""
              checked={filters.brand.includes(brand)}
              className="w-4 h-4 border text-blue-500 focus:ring-blue-600 border-gray-400 mr-2"
            />
            <span>{brand}</span>
          </div>
        ))}
      </div> */}
      {/* Price range */}
      <div className="mb-6">
        <label className="block mb-2 text-gray-600 font-medium">
          Price Range
        </label>

        <input
          type="range"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 rounded-lg bg-gray-200 appearance-none cursor-pointer"
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm">$0</span>
          <span className="text-sm">$100</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSideber;
