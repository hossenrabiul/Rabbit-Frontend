import React, { useState } from "react";
import loginImg from "../assets/Reddit/login.webp";
import { Link, useNavigate } from "react-router-dom";
import { FaHandsClapping } from "react-icons/fa6";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        " https://rabbit-backend-1vcy.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message, { duration: 500 });
        return;
      }

      toast.success("Login successful", { duration: 500 });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex mt-[124px]">
      <div className="w-full md:w-1/2 flex justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleFormSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
        >
          <div className="flex justify-center mb-2">
            <h2 className="text-xl font-semibold text-gray-900">Rabbit</h2>
          </div>
          <h2 className="text-lg font-bold text-gray-800 text-center mb-4 flex justify-center items-center">
            Hey There <FaHandsClapping className="text-xl ml-1.5" />{" "}
          </h2>
          <p className="text-[16px] font-semibold text-gray-600 text-center">
            Please enter your email and password
          </p>
          <div className="mt-10">
            <label className="text-sm font-semibold block mb-2">Email : </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full p-2 bg-gray-100 border-none rounded focus:outline-none text-[16px]"
            />
          </div>
          <div className="mt-5">
            <label className="text-sm font-semibold block mb-2">
              Password :{" "}
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full p-2 bg-gray-100 border-none rounded focus:outline-none text-[16px]"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-5 px-4 py-3 bg-black rounded-lg text-white text-lg"
          >
            Sign In
          </button>
          <p className="text-sm text-center font-medium mt-6 ">
            Don't have an account ?{" "}
            <Link to={"/register"} className="text-blue-500">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
      <div className="hidden md:block md:w-1/2 bg-gray-700">
        <div className="h-full w-full">
          <img
            src={loginImg}
            className="w-full h-[700px] object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
