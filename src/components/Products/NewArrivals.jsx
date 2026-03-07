import {useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Link } from "react-router-dom";

const NewArrivals = () => {
  const allProducts = [
    {
      _id: 1,
      name: "Stylish Jeans",
      image: [
        {
          url: "https://picsum.photos/200/300?random=1",
          alt: "stylish jeans",
        },
      ],
      price: 130,
    },
    {
      _id: 2,
      name: "Stylish T-shirt",
      image: [
        {
          url: "https://picsum.photos/200/300?random=2",
          alt: "stylish jeans",
        },
      ],
      price: 120,
    },
    {
      _id: 3,
      name: "Stylish Shirt",
      image: [
        {
          url: "https://picsum.photos/200/300?random=3",
          alt: "stylish jeans",
        },
      ],
      price: 150,
    },
    {
      _id: 4,
      name: "Stylish",
      image: [
        {
          url: "https://picsum.photos/200/300?random=4",
          alt: "stylish jeans",
        },
      ],
      price: 160,
    },
    {
      _id: 5,
      name: "Stylish Shirt",
      image: [
        {
          url: "https://picsum.photos/200/300?random=5",
          alt: "stylish jeans",
        },
      ],
      price: 190,
    },
    {
      _id: 6,
      name: "Stylish Shirt",
      image: [
        {
          url: "https://picsum.photos/200/300?random=6",
          alt: "stylish jeans",
        },
      ],
      price: 200,
    },
    {
      _id: 7,
      name: "Stylish Shirt",
      image: [
        {
          url: "https://picsum.photos/200/300?random=7",
          alt: "stylish jeans",
        },
      ],
      price: 210,
    },
    {
      _id: 8,
      name: "Stylish Shirt",
      image: [
        {
          url: "https://picsum.photos/200/300?random=8",
          alt: "stylish jeans",
        },
      ],
      price: 220,
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    console.log(current)
    if (current) {
      const scrollAmount = 400;

      current.scrollBy({
        left:  direction === "left" ? -scrollAmount : scrollAmount,
        behavior : 'smooth',
      });
    }
  };



  return (
    <section className="py-12 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h1 className="text-3xl font-medium mb-4">New Arrivals</h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover the latest style straight off the runway, Freshly added to
          keep your wardrope on the cutting edge of fashion{" "}
        </p>
        {/* scroll buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button onClick={()=> scroll("left")} className="p-2 border bg-white rounded">
            <FiChevronLeft className="text-2xl text-gray-800" />
          </button>
          <button onClick={()=> scroll("right")} className="p-2 border bg-white rounded">
            <FiChevronRight className="text-2xl text-gray-800" />
          </button>
        </div>
      </div>

      {/* scrollber div */}
      <div
        ref={scrollRef}
        className="container mx-auto flex overflow-x-scroll space-x-6"
      >
        {allProducts.map((product) => (
          <Link to={'/product/id'}
            key={product._id}
            className="min-w-[100%] md:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.image[0].url}
              alt=""
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white backdrop-blur-md">
              <Link
                to={"product/id"}
                className="flex justify-between items-center"
              >
                <h4>{product.name}</h4>
                <p>{product.price}</p>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
