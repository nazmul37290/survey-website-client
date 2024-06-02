import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useGoogleSignIn from "../../hooks/useGoogleSignIn";

const Register = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile, logOut, signInWithGoogle } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const googleLogin = useGoogleSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   create user with email and password
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = { name: data.name, email: data.email };
        console.log(result);
        axiosPublic.post("/users", user).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registered Successfully, login to account now ",
            });
          }
        });
        updateUserProfile(data.name, data.photoUrl).then((result) => {
          logOut().then(() => {
            navigate("/login");
          });
        });
      })
      .catch((error) => console.log(error));
  };

  //   create user with google
  const handleGoogleLogin = () => {
    googleLogin();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto shadow-lg border p-10 mt-10 rounded-xl"
      >
        <h1 className="text-black mb-16 text-center font-bold text-xl">
          Sign Up
        </h1>
        <div>
          <label className="block text-sm text-gray-800 dark:text-gray-200">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-800 dark:text-gray-200">
            Photo
          </label>
          <input
            {...register("photoUrl")}
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-800 dark:text-gray-200">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            name="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {errors.email && (
            <span className="text-red-600">email is required</span>
          )}
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
              {...register("password", {
                required: true,

                minLength: 6,
              })}
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
          {errors.password && (
            <span className="text-red-600">password is required</span>
          )}
        </div>

        <p className="text-[#f45151]">{error}</p>
        <div className="mx-auto w-1/4">
          <input
            className="btn mx-auto mt-4 bg-main w-full"
            type="submit"
            value="Sign Up"
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
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center mx-auto w-max px-6 py-2  text-sm font-medium text-light transition-colors duration-300 transform btn rounded-lg hover:bg-light hover:text-base-100 focus:outline-none"
          >
            <FcGoogle className="text-2xl"></FcGoogle>
            <span>sign in with google</span>
          </button>
        </div>

        <Link to={"/login"}>
          <p className="mt-8 text-xs font-light text-center text-second">
            Already have an account?{" "}
            <span className="font-bold text-blue-700">Login</span>
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Register;
