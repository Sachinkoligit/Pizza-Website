"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "@/app/components/Footer";

export default function Product({ params }, any) {
  const pizza = {
    id: 1,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/pizzaImg/focaccia.jpg",
    soldOut: false,
  };
  const [price, setPrice] = useState(pizza.price);
  const [disabled, setDisabled] = useState(false);

  const [double, setDouble] = useState(false);
  const [cheese, setCheese] = useState(false);
  const [spicy, setSpicy] = useState(false);
  const [garlic, setGarlic] = useState(false);

  useEffect(() => {
    Disabled();
    console.log(double);
  }, [double, cheese, spicy, garlic]);

  function Disabled() {
    if (double || cheese || spicy || garlic) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }
  return (
    <>
      <div className="h-full flex flex-col w-full">
        <Navbar />
        <div className="flex flex-col md:flex md:flex-row pb-1 justify-center items-center">
          <div className="flex mt-[102px] h-[400px] md:h-[500px] md:w-[50%] w-[98%]">
            <img
              src={pizza.photoName}
              alt="PizzaImg"
              className="h-[100%] w-[100%]"
            />
          </div>
          <div className="pl-[15px] w-[100%] mt-[20px] md:mt-[120px] mb-[10px] flex flex-col items-center md:w-[50%]">
            <div className=" md:pr-[15px] flex flex-col gap-3">
              <h1 className="text-center md:text-left font-semibold text-[35px] md:text-3xl">
                {pizza.name}
              </h1>
              <span className="text-center md:text-left font-semibold text-[30px] md:text-2xl underline text-red-600">
                ${price}
              </span>
              <p className="text-center md:text-left text-[24px] md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                sint mollitia cumque excepturi, facere facilis officia libero
                dolores incidunt rerum est voluptate adipisci, repellat qui!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
                aspernatur rerum. Nemo quaerat reiciendis eos.
              </p>
              <div className="text-center md:text-left ">
                <span className="font-semibold text-[28px] md:text-xl">
                  Choose the Size
                </span>
              </div>
              <div className="">
                <div className="justify-center md:justify-start flex gap-8 pt-2">
                  <button
                    className="text-[20px] md:text-[14px] btn rounded-2xl bg-teal-600 text-white hover:scale-105 transition duration-500"
                    onClick={() => {
                      setPrice(pizza.price);
                    }}
                    disabled={disabled}
                  >
                    Small
                  </button>
                  <button
                    className="text-[22px] btn rounded-2xl bg-teal-600 text-white md:text-[16px] hover:scale-105 transition duration-500"
                    onClick={() => {
                      setPrice(pizza.price + 2);
                    }}
                    disabled={disabled}
                  >
                    Medium
                  </button>
                  <button
                    className="text-[24px] btn rounded-2xl bg-teal-600 text-white md:text-[18px] hover:scale-105 transition duration-500"
                    onClick={() => {
                      setPrice(pizza.price + 4);
                    }}
                    disabled={disabled}
                  >
                    Large
                  </button>
                </div>
              </div>
              <div className="text-center md:text-left mt-3">
                <span className="font-semibold text-[28px] md:text-xl">
                  Choose Additional ingredients
                </span>
              </div>
              <div className="flex flex-col justify-start items-start md:flex md:flex-row pl-[15px] md:pl-[0px] gap-3 mt-2">
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    id="double"
                    className="h-[30px] w-[30px] md:h-[18px] md:w-[18px] mr-1"
                    onClick={(e) => {
                      if (e.target.checked) {
                        setPrice((x) => x + 2);
                        setDouble(true);
                      } else {
                        setPrice((x) => x - 2);
                        setDouble(false);
                      }
                    }}
                  />
                  <label htmlFor="double" className="text-[18px] font-medium">
                    Double Ingredients
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    id="cheese"
                    className="h-[30px] w-[30px] md:h-[18px] md:w-[18px] mr-1"
                    onClick={(e) => {
                      if (e.target.checked) {
                        setPrice((x) => x + 2);
                        setCheese(true);
                      } else {
                        setPrice((x) => x - 2);
                        setCheese(false);
                      }
                    }}
                  />
                  <label htmlFor="cheese" className="text-[18px] font-medium">
                    Extra Cheese
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    id="spicy"
                    className="h-[30px] w-[30px] md:h-[18px] md:w-[18px] mr-1"
                    onClick={(e) => {
                      if (e.target.checked) {
                        setPrice((x) => x + 1);
                        setSpicy(true);
                      } else {
                        setPrice((x) => x - 1);
                        setSpicy(false);
                      }
                    }}
                  />
                  <label htmlFor="spicy" className="text-[18px] font-medium">
                    Spicy Sauce
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    id="garlic"
                    className="h-[30px] w-[30px] md:h-[18px] md:w-[18px] mr-1"
                    onClick={(e) => {
                      if (e.target.checked) {
                        setPrice((x) => x + 1);
                        setGarlic(true);
                      } else {
                        setPrice((x) => x - 1);
                        setGarlic(false);
                      }
                    }}
                  />
                  <label htmlFor="garlic" className="text-[18px] font-medium">
                    Garlic Sauce
                  </label>
                </div>
              </div>
              <div className="justify-center flex gap-2 mt-3">
                <input
                  type="number"
                  className="border-[1px] w-[120px] md:w-[100px] rounded-[5px]"
                />
                <button className="text-[18px] md:text-[14px] btn bg-red-500 rounded-[5px] hover:bg-red-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
