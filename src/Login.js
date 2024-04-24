import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {useNavigate}from "react-router-dom";

import Nav from "./LandingPage.js/Nav";
import Footer from "./LandingPage.js/Footer";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const Onlogin=()=>{
    localStorage.setItem('login',true)
    navigate('/')
}
const navigate= useNavigate();

useEffect(()=>{
    let login = localStorage.getItem('login');
    if(!login){
        // navigate('/')
    }
});

  return (
    <>
      <Nav />
      <div className="h-full py-20">
        <div className="shadow-2xl p-10 bg-white max-w-xl mx-auto h-86  justify-center  rounded">
          <h1 className="text-4xl font-black mb-4">Login</h1>
          <form
            id="form"
            className=" grid grid-cols-1"
            onSubmit={handleSubmit(onSubmit)}
            method="post"
          >
            <input
              type="email"
              id="email"
              {...register("username", { required: true })}
              placeholder="Email_Id"
              className="input border border-gray-400   appearance-none rounded w-full px-3 pt-4 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
            />
            {errors.username?.type === "required" && "Email_ is required "}
            <input
              type="text"
              {...register("password", { required: true, maxLength: 8 })}
              placeholder="password"
              className="input border border-gray-400 mt-2 appearance-none rounded w-full px-3 pt-4  pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
            />
            {errors.password?.type === "required" && "Password is required"}
            {errors.password?.type === "maxLength" && "Max lenght 8 DIGIT"}

            <button type="submit" onClick={Onlogin} className="text-blue-800 bg-transparent border-2 border-blue-800 w-full md:w-40 h-12 mt-4 hover:bg-blue-900 duration-150 hover:text-white hover:rounded-md lg:w-42">
              Sign In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
