import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart, removeFromCart } from "../../services/cart.service";
import { FiTrash2 } from "react-icons/fi";
import { AuthContext } from "../../context/authContext";
import { createOrder } from "../../services/order.service";
import { toast } from "sonner";

const CheckOut = () => {
  const { user, loading } = useContext(AuthContext);
  const [cart, setCart] = useState("");
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    state: "",
    number: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newOrder = await createOrder(
      shippingAddress,
      cart.items,
      cart.totalPrice,
    );
    if (newOrder.success) {
      toast.success(newOrder.message, { duration: 500 });
    } else {
      toast.error(newOrder.message, { duration: 500 });
    }
  };

  const handleDltProduct = async (id) => {
    await removeFromCart(id);
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart();
        setCart(data);
      } catch (error) {
        console.error("Failed to fetch cart", error);
      }
    };

    fetchCart();
  }, []);
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (cart?.items?.length == 0) {
    navigate("/emptycart");
  }

  if (!user) {
    navigate("/login");
  }
  return (
    <div className="mt-[124px] py-6 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h1 className="text-2xl uppercase mt-4">Checkout</h1>

        <form onSubmit={handleFormSubmit} className="mt-6">
          <h4 className="text-md font-semibold">Contact Details</h4>
          <div>
            <label className="text-sm mb-2">Email</label>
            <input
              value={shippingAddress.email}
              className="w-full bg-gray-100 rounded-md border p-2 text-sm focus:outline-none"
              type="email"
              name="email"
              id=""
              placeholder="Email"
              onChange={(e) => {
                setShippingAddress({
                  ...shippingAddress,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <h3 className="text-lg font-semibold mt-3">Delivery</h3>
          {/* Name */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex-1">
              <label className="block text-sm mb-2">First Name</label>
              <input
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="border w-full rounded-md p-2 text-sm focus:outline-none"
                type="text"
                name="firstName"
                id=""
                required
                placeholder="FirstName"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-2">Last Name</label>
              <input
                value={setShippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="border w-full rounded-md p-2 text-sm focus:outline-none"
                type="text"
                name="lastName"
                id=""
                placeholder="LastName"
              />
            </div>
          </div>
          {/* Address */}
          <div className="mt-4">
            <label className="block mb-2 text-sm">Address</label>
            <input
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="p-2 border w-full rounded-md focus:outline-none text-sm"
              type="text"
              name="address"
              id=""
              required
              placeholder="Address"
            />
          </div>
          {/* City and Postal Code */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="">
              <label className="block text-sm mb-2">City</label>
              <input
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="border w-full rounded-md p-2 text-sm focus:outline-none"
                type="text"
                name="city"
                id=""
                required
                placeholder="City"
              />
            </div>
            <div className="">
              <label className="block text-sm mb-2">Postal Code</label>
              <input
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="border w-full rounded-md p-2 text-sm focus:outline-none"
                type="number"
                name="postalCode"
                id=""
                required
                placeholder="PostalCode"
              />
            </div>
          </div>
          {/* Country */}
          <div className="mt-4 flex items-center gap-3">
            <div className="w-full">
              <label className="block mb-2 text-sm">Country</label>
              <input
                value={shippingAddress.country}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    country: e.target.value,
                  })
                }
                className="p-2 border w-full rounded-md focus:outline-none text-sm"
                type="text"
                name="country"
                id=""
                required
                placeholder="Country"
              />
            </div>

            <div className="w-full">
              <label className="block mb-2 text-sm">State</label>
              <input
                value={shippingAddress.state}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    state: e.target.value,
                  })
                }
                className="p-2 border w-full rounded-md focus:outline-none text-sm"
                type="text"
                name="state"
                id=""
                required
                placeholder="State"
              />
            </div>
          </div>
          {/* Number */}
          <div className="mt-4">
            <label className="block mb-2 text-sm">Number</label>
            <input
              value={shippingAddress.number}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  number: e.target.value,
                })
              }
              className="p-2 border w-full rounded-md focus:outline-none text-sm"
              type="number"
              name="number"
              id=""
              required
              placeholder="Number"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 text-center px-3 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-xl"
          >
            Submit
          </button>
          {/* <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-gray-800 text-white text-[15px] rounded-lg p-3 hover:bg-gray-700"
              >
                Continue to payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg font-semibold mb-4">Pay With Paypal</h3>
                <PaypalButton
                  amount={100}
                  onSuccess={handlePayment}
                  onError={(err) => alert("Payment Failed. Try later")}
                ></PaypalButton>
              </div>
            )}
          </div> */}
        </form>
      </div>

      {/* Rigth section */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-lg mb-3">Order Summary</h4>
        <div className="border border-gray-300"></div>
        <div className="mt-4 space-y-4">
          {cart?.items?.map((product, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm  hover:shadow-md transition"
            >
              {/* Left Section */}
              <div className="flex items-center gap-4">
                <img
                  className="w-20 h-24 rounded-md object-cover border"
                  src={product.productId.image}
                  alt={product.productId.name}
                />

                <div>
                  <h4 className="text-[16px] font-semibold">
                    {product.productId.name}
                  </h4>

                  {/* Quantity Controller */}
                  <div className="flex items-center gap-3 mt-3">
                    <button className="px-2 py-1 border rounded hover:bg-gray-100">
                      -
                    </button>

                    <span className="text-sm font-medium">
                      {product.quantity}
                    </span>

                    <button className="px-2 py-1 border rounded hover:bg-gray-100">
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col items-end gap-4">
                <p className="text-lg font-semibold text-gray-800">
                  ${product.price}
                </p>

                <button
                  onClick={() => handleDltProduct(product._id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-lg mt-4">
          <p>Subtotal</p>
          <p>{cart.totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
