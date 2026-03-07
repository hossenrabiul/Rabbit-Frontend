import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSideber from "../components/Products/FilterSideber";
import SortFeatures from "../components/Products/SortFeatures";
import GridProducts from "../components/Products/GridProducts";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../services/product.service";

const CollectionPage = () => {
  const [params] = useSearchParams();
  const queryString = params.toString();
  const sidebarRef = useRef(null);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [products, setProducts] = useState([]);
 
  // setProducts(allProducts.data);
  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsOpenSidebar(false);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(queryString);
      setProducts(data.data);
    };
    fetchProducts();
  }, [queryString]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const fetchedProducts = [
  //       {
  //         _id: 1,
  //         name: "Stylish Jeans",
  //         image: [
  //           {
  //             url: img1,
  //             alt: "stylish jeans",
  //           },
  //         ],
  //         price: 130,
  //       },
  //       {
  //         _id: 2,
  //         name: "Stylish T-shirt",
  //         image: [
  //           {
  //             url: "https://picsum.photos/200/300?random=52",
  //             alt: "stylish jeans",
  //           },
  //         ],
  //         price: 120,
  //       },
  //       {
  //         _id: 3,
  //         name: "Stylish Shirt",
  //         image: [
  //           {
  //             url: "https://picsum.photos/200/300?random=53",
  //             alt: "stylish jeans",
  //           },
  //         ],
  //         price: 150,
  //       },
  //       {
  //         _id: 4,
  //         name: "Stylish",
  //         image: [
  //           {
  //             url: "https://picsum.photos/200/300?random=54",
  //             alt: "stylish jeans",
  //           },
  //         ],
  //         price: 160,
  //       },
  //       {
  //         _id: 5,
  //         name: "Stylish Shirt",
  //         image: [
  //           {
  //             url: "https://picsum.photos/200/300?random=55",
  //             alt: "stylish jeans",
  //           },
  //         ],
  //         price: 190,
  //       },
  //       {
  //         _id: 6,
  //         name: "Stylish Shirt",
  //         image: [
  //           {
  //             url: "https://picsum.photos/200/300?random=56",
  //             alt: "stylish jeans",
  //           },
  //         ],
  //         price: 200,
  //       },
  //       {
  //         _id: 7,
  //         name: "Stylish Shirt",
  //         image: [
  //           {
  //             url: "https://picsum.photos/200/300?random=57",
  //             alt: "stylish jeans",
  //           },
  //         ],
  //         price: 210,
  //       },
  //       {
  //         _id: 8,
  //         name: "Stylish Shirt",
  //         image: [
  //           {
  //             url: "https://picsum.photos/200/300?random=46",
  //             alt: "stylish jeans",
  //           },
  //         ],
  //         price: 220,
  //       },
  //     ];
  //     setProducts(fetchedProducts);
  //   }, 1000);
  // }, []);

  // if (loading) {
  //   return <p>Loading ....</p>;
  // }
  return (
    <div className="mt-[124px] flex flex-col lg:flex-row">
      {/* Mobile filter button */}
      <button
        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
        className="lg:hidden border flex justify-center items-center p-2"
      >
        <FaFilter className="mr-2" /> Filter
      </button>
      {/* Filter sidebar */}
      {/* <div
        ref={sidebarRef}
        className={`bg-white inset-y-0 text-black w-64 h-full fixed top-0 left-0 z-50 transform transition-transform duration-300 ${
          isOpenSidebar ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto lg:static lg:translate-x-0 lg:z-0`}
      >
        <FilterSideber />
      </div> */}
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold uppercase mb-4">All Collections</h1>

        {/* Product sorting */}
        {/* <SortFeatures /> */}

        <GridProducts products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
