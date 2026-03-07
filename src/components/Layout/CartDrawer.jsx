
import { IoClose } from "react-icons/io5";
import CartComponents from "../Cart/CartComponents";
import { useNavigate } from "react-router-dom";


const CartDrawer = ({cartDrawer, toggleCartDrawer}) => {
  const navigate = useNavigate()
  const handleCheckout = ()=>{
    toggleCartDrawer()
    navigate('/checkout')
  }
  return (
    <div
      className={`fixed right-0 top-0 w-3/4 sm:w-1/2 md:w-[350px] h-full bg-white shadow-lg flex flex-col transform transition-transform duration-300 z-50
        ${cartDrawer ? "translate-x-0" : "translate-x-full"}
        `}
    >
      {/* Close BUtton */}
      <div className="flex justify-end p-5">
        <button onClick={toggleCartDrawer}>
          <IoClose className="h-6 w-6 text-gray-500"/>
        </button>
      </div>
      {/* Cart contents */}
      <div className="flex-grow p-4 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Your cart</h2>

        {/* Cart contents */}
        <CartComponents/>
      </div>
      <div className="p-4 bg-white sticky bottom-0">
          <button
          onClick={handleCheckout}
          className="transition text-sm font-semibold py-3 w-full bg-black rounded-lg text-white hover:bg-gray-800">Checkout</button>
          <p className="text-sm tracking-tighter text-center text-gray-500 my-2">Taxes, Discount, and Shipping calculated at checkout</p>
      </div>
    </div>
  );
};

export default CartDrawer;
