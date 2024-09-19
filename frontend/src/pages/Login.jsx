import React from "react";
import loginImg from "../assets/photos/login-img.png";
const Login = () => {
  return (
    <div className="flex flex-col items-center md:flex-row mx-20">
      <div className="w-full md:w-1/2">
        <img src={loginImg} className="mx-12" alt="" />
      </div>
      <div className="mx-20">
        <h1 className="font-bold text-4xl my-4">Home/Log In</h1>
        <form action="">
          <input
            type="email"
            className="border rounded border-gray-300 w-full p-2 m-2"
          />
          <label>Email Address</label>
          <input
            type="password"
            className="border rounded border-gray-300 w-full p-2 m-2"
          />
          <label>Password</label>
          <div className="flex justify-between m-4 font-bold">
            <div>
              <input type="checkbox" /> Remember Me
            </div>
            <div className="text-red-500">Forget Password?</div>
          </div>
          <button
            type="submit"
            className="text-center w-full py-2 text-white font-bold bg-blue-500 rounded hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
        <p className="m-4">
          Don't Have a Account?{" "}
          <span className="text-blue-500 font-bold">Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
