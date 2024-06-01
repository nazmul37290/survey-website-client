import { useForm } from "react-hook-form";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto shadow-lg border p-10 mt-10 rounded-xl"
      >
        <div>
          <h1 className="text-black mb-16 text-center font-bold text-xl">
            LOGIN
          </h1>
          <label className="block text-sm text-gray-800 dark:text-gray-200">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4 ">
          <div className="flex items-center justify-between">
            <label className="block text-sm text-gray-800 dark:text-gray-200">
              Password
            </label>
            <a
              href="#"
              className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
            >
              Forget Password?
            </a>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              {...register("password")}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-3 mb-2 text-lg">
              {showPassword ? (
                <FaEyeSlash onClick={() => setShowPassword(false)}></FaEyeSlash>
              ) : (
                <FaEye onClick={() => setShowPassword(true)}></FaEye>
              )}
            </div>
          </div>
        </div>

        <p className="text-[#f45151]">{error}</p>
        <div className="mx-auto w-1/4">
          <input
            className="btn mx-auto mt-4 bg-main w-full"
            type="submit"
            value="Login"
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with Social Media
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6">
          <button
            onClick={""}
            type="button"
            className="flex items-center justify-center mx-auto w-max px-6 py-2  text-sm font-medium text-light transition-colors duration-300 transform btn rounded-lg hover:bg-light hover:text-base-100 focus:outline-none"
          >
            <FcGoogle className="text-2xl"></FcGoogle>
            <span>sign in with google</span>
          </button>
        </div>

        <Link to={"/register"}>
          <p className="mt-8 text-xs font-light text-center text-second">
            Dont have an account?{" "}
            <span className="font-bold text-blue-700">Register</span>
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
