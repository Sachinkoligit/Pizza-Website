import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function page() {
  const cart = [
    {
      img: "/pizzaImg/funghi.jpg",
      name: "FUNGHI",
      extras: "Double Ingredient, Spicy sauce",
      price: "$0",
      quantity: 2,
      total: "$20",
    },
  ];
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="pt-[80px] md:pt-[120px] mb-8 min-h-[500px] px-[20px] md:flex md:flex-row gap-3 flex flex-col md:px-[50px]">
        <table className="hidden md:table md:w-full md:text-center">
          <thead className="">
            <tr className="">
              <th className="w-[30%]">
                <p className="">Product</p>
              </th>
              <th>
                <p className="">Name</p>
              </th>
              <th className="w-[30%]">
                <p>Extras</p>
              </th>
              <th>
                <p className="">Price</p>
              </th>
              <th>
                <p>Quantity</p>
              </th>
              <th>
                <p>Total</p>
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-[17px]">
              <td>
                <img
                  src="/pizzaImg/funghi.jpg"
                  alt="pizza"
                  className="h-[200px] w-[200px] rounded-[10%]"
                />
              </td>
              <td>
                <p className="text-red-600">FUNGHI</p>
              </td>
              <td>
                <p>Double ingredients, Spicy sauce</p>
              </td>
              <td>
                <p>$13</p>
              </td>
              <td>
                <p className="">2</p>
              </td>
              <td>
                <p className=" font-medium">$26</p>
              </td>
            </tr>
            <tr className="text-[17px]">
              <td>
                <img
                  src="/pizzaImg/salamino.jpg"
                  alt="pizza"
                  className="h-[200px] w-[200px] rounded-[10%]"
                />
              </td>
              <td>
                <p className="text-red-600">SALAMINO</p>
              </td>
              <td>
                <p>Double ingredients, Garlic sauce</p>
              </td>
              <td>
                <p>$10</p>
              </td>
              <td>
                <p className="">3</p>
              </td>
              <td>
                <p className="font-medium">$30</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pt-[50px] justify-center items-center flex flex-col gap-4 w-full md:hidden">
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src="/pizzaImg/funghi.jpg"
                alt="pizza"
                className="h-[400px] w-[400px] rounded-[10%]"
              />
            </div>
            <div>
              <p className="text-3xl font-medium text-red-600">FUNGHI</p>
            </div>
            <div>
              <p className="text-[26px]">Double ingredients, Spicy sauce</p>
            </div>
            <div className="flex flex-row gap-1 justify-center items-center">
              <p className="text-[26px] font-medium">Price:</p>
              <p className="text-[25px]">$13</p>
            </div>
            <div className="flex flex-row gap-1 justify-center items-center">
              <p className="text-[26px] font-medium">Quantity:</p>
              <p className="text-[25px]">2</p>
            </div>
            <div className="flex flex-row gap-1 justify-center items-center">
              <p className="text-[26px] font-medium">Total Price:</p>
              <p className="text-[28px] font-medium">$26</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src="/pizzaImg/salamino.jpg"
                alt="pizza"
                className="h-[400px] w-[400px] rounded-[10%]"
              />
            </div>
            <div>
              <p className="text-3xl font-medium text-red-600">SALAMINO</p>
            </div>
            <div>
              <p className="text-[26px]">Double ingredients, Garlic sauce</p>
            </div>
            <div className="flex flex-row gap-1 justify-center items-center">
              <p className="text-[26px] font-medium">Price:</p>
              <p className="text-[25px]">$10</p>
            </div>
            <div className="flex flex-row gap-1 justify-center items-center">
              <p className="text-[26px] font-medium">Quantity:</p>
              <p className="text-[25px]">3</p>
            </div>
            <div className="flex flex-row gap-1 justify-center items-center">
              <p className="text-[26px] font-medium">Total Price:</p>
              <p className="text-[28px] font-medium">$30</p>
            </div>
          </div>
        </div>
        <div className="mt-[10px] md:mt-[0px] bg-[#000000b9] [&_p_span]:font-normal w-[90%] md:w-[30%] h-[30%] text-white p-[50px] ml-[20px] font-bold">
          <span className="text-3xl md:text-2xl">CART TOTAL</span>
          <p className="text-[25px] md:text-[16px] pt-[20px]">
            {" "}
            Subtotal: <span>$26</span>
          </p>
          <p className="text-[25px] md:text-[16px] ">
            Discount: <span>$0.00</span>
          </p>
          <p className="text-[25px] md:text-[16px] ">
            Total: <span>$26</span>
          </p>
          <button className="text-[20px] md:text-[16px] bg-white text-red-600 mt-[20px] px-[70px] py-[2px] hover:cursor-pointer">
            CHECKOUT NOW
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
