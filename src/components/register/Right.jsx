import React, { useState } from "react";
import { Link } from "react-router-dom";

const Right = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      fullName,
      email,
      password,
    };
    console.log(user);
  };
  return (
    <div className="w-1/2 h-full flex flex-col justify-center items-center">
      <h1 className="w-2/3 text-4xl font-black ">Sign up</h1>
      <p className="w-2/3 text-sm mt-2 font-semibold text-zinc-400">
        Enter details to create your account.
      </p>
      <form onSubmit={submitHandler} className="w-2/3 mt-5 rounded-md">
        <div className="font-semibold mb-5">
          <label className="text-zinc-400" htmlFor="fullName">
            Full Name
          </label>
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 mt-1 rounded-md outline-none bg-transparent border border-zinc-400"
          />
        </div>
        <div className="font-semibold mb-5">
          <label className="text-zinc-400" htmlFor="fullName">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 mt-1 rounded-md outline-none bg-transparent border border-zinc-400"
          />
        </div>
        <div className="font-semibold mb-5">
          <label className="text-zinc-400" htmlFor="fullName">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mt-1 rounded-md outline-none bg-transparent border border-zinc-400"
          />
        </div>
        <button className="w-full px-4 py-2 mb-5 bg-blue-400 text-lg text-white rounded-md">
          Register
        </button>
      </form>
      <p className="text-sm font-semibold">
        Already have an account ?{" "}
        <Link to="/login" className="text-blue-400 font-semibold">
          Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default Right;
