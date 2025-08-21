"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  
  const router = useRouter();
  const onProduct = () => {
    router.push("/product/[id]");
  };
  const onHomepage = () => {
    router.push("/");
  };
  const onCart=()=>{
    router.push("/cart")
  }
  return (
    <div className="h-[100px] py-0 px-[0px] pr-[20px] md:px-[50px] bg-[#e3421a] flex items-center justify-between fixed to-0 left-0 right-0 text-center z-50">
      <div className="dropdown flex-1/4 w-[30%] md:hidden">
        <div tabIndex={0} role="button" className="btn m-1">
          &#9776;
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={onHomepage}>Homepage</a>
          </li>
          <li>
            <a onClick={onProduct}>Products</a>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="w-[30%] justify-center flex-2/4 md:flex-1/3 flex">
        <div className="bg-white rounded-[50%] p-2">
          <Image src="/img/telephone.png" alt="" width={32} height={32} />
        </div>
        <div className="ml-[15px] text-white">
          <div className="text-[13px] font-medium">ORDER NOW!</div>
          <div className="text-[20px] font-bold">012 345 678</div>
        </div>
      </div>
      <div className="hidden md:flex md:flex-2/3 md:justify-center">
        <ul className="flex justify-between items-center gap-4 text-white ">
          <li className="font-[600] cursor-pointer" onClick={onHomepage}>
            Homepage
          </li>
          <li className="font-[600] cursor-pointer" onClick={onProduct}>
            Products
          </li>
          <li className="font-[600]">Menu</li>
          <Image
            src="/img/logo.png"
            alt=""
            width={160}
            height={69}
            className="mx-0"
          />
          <li className="font-[600]">Events</li>
          <li className="font-[600]">Blog</li>
          <li className="font-[600]">Contact</li>
        </ul>
      </div>
      <div className="flex-1/4 w-[30%] md:flex-1/3 flex flex-col items-center md:justify-center">
        <div className="mb-[5px] hover:cursor-pointer" onClick={onCart}>
          <div className="bg-white rounded-[60%] h-[20px] w-[20px] ml-[15px] mt-[5px]">
            <span className="mb-[250px]">2</span>
          </div>
          <Image src="/img/cart.png" alt="" width={40} height={40} />
        </div>
      </div>
    </div>
  );
}
