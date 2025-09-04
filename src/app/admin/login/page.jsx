"use client";

import Navbar from "@/app/components/Navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  async function handleClick() {
    try {
      const x = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      x.status === 200 && router.push("/admin");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }
  return (
    <>
      <Navbar />
      <div className=" min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col gap-[20px] [&>input]:border-1 [&>input]:p-[5px]">
          <h1 className="text-2xl font-bold">Admin Dashboard Login</h1>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleClick}>
            Sign In
          </button>
          {error && <div className="text-red-500">Wrong Crenditials!</div>}
        </div>
      </div>
    </>
  );
}
