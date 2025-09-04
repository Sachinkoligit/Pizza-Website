"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "@/app/components/Footer";
import axios from "axios";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { addProduct } from "@/app/redux/cartSlice";

export default function Product({ params }, any) {
  const pizza = {
    id: 1,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/pizzaImg/focaccia.jpg",
    soldOut: false,
  };

  const [newPizza, setNewPizza] = useState(null);
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchPizza() {
      try {
        const res = await axios.get(`https://pizza-website-chi-hazel.vercel.app/api/products/${id}`);
        setNewPizza(res.data);
        setPrice(res.data.prices[0]);
      } catch (err) {
        console.log("Failed to fetch Pizza", err);
      }
    }
    fetchPizza();
  }, [id]);

  var [pizzaOption, setPizzaOption] = useState([]);
  const [disabled, setDisabled] = useState(false);

  // useEffect(() => {
  //   Disabled();
  // }, [double, cheese, spicy, garlic]);

  function Disabled() {
    if (double || cheese || spicy || garlic) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }
  function handleChange(e, option) {
    if (e.target.checked) {
      setPrice((x) => x + option.price);
      // setDisabled(true);
    } else {
      setPrice((x) => x - option.price);
      // setDisabled(false);
    }
  }
  function handleClick() {
    dispatch(addProduct({ ...newPizza, pizzaOption, price, quantity }));
  }
  return (
    <>
      <div className="h-full flex flex-col w-full">
        <Navbar />
        {newPizza && (
          <div className="min-h-screen flex flex-col md:flex md:flex-row pb-1 justify-center items-center">
            <div className="flex mt-[105px] h-[400px] md:h-[500px] md:w-[40%] w-[98%]">
              <img
                src={newPizza.img}
                alt="PizzaImg"
                className="h-[100%] w-[100%]"
              />
            </div>
            <div className="pl-[15px] w-[100%] mt-[20px] md:mt-[120px] mb-[10px] flex flex-col items-center  md:w-[60%]">
              <div className=" md:pr-[15px] flex flex-col gap-3">
                <h1 className="text-center md:text-left font-semibold text-[35px] md:text-3xl">
                  {newPizza.title.toUpperCase()}
                </h1>
                <span className="text-center md:text-left font-semibold text-[30px] md:text-2xl underline text-red-600">
                  ${price === null ? newPizza.prices[0] : price}
                </span>
                <p className="text-center md:text-left text-[24px] md:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum sint mollitia cumque excepturi, facere facilis officia
                  libero dolores incidunt rerum est voluptate adipisci, repellat
                  qui! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Qui, aspernatur rerum. Nemo quaerat reiciendis eos.
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
                        // setSize(0);
                        setPrice(newPizza.prices[0]);
                      }}
                      disabled={disabled}
                    >
                      Small
                    </button>
                    <button
                      className="text-[22px] btn rounded-2xl bg-teal-600 text-white md:text-[16px] hover:scale-105 transition duration-500"
                      onClick={() => {
                        // setSize(1);
                        setPrice(newPizza.prices[1]);
                      }}
                      disabled={disabled}
                    >
                      Medium
                    </button>
                    <button
                      className="text-[24px] btn rounded-2xl bg-teal-600 text-white md:text-[18px] hover:scale-105 transition duration-500"
                      onClick={() => {
                        // setSize(2);
                        setPrice(newPizza.prices[2]);
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
                  {newPizza.extraOptions.map((pizza, i) => {
                    return (
                      <div className="flex justify-center items-center" key={i}>
                        <input
                          type="checkbox"
                          id={pizza.text}
                          className="h-[30px] w-[30px] md:h-[18px] md:w-[18px] mr-1"
                          onChange={(e) => {
                            handleChange(e, pizza);
                            const isChecked = e.target.checked;

                            pizzaOption = isChecked
                              ? [...pizzaOption, pizza]
                              : pizzaOption.filter(
                                  (item) => item.text !== pizza.text
                                );

                            setPizzaOption(pizzaOption);
                            setDisabled(!(pizzaOption.length === 0));

                            // console.log(quantity);
                          }}
                        />
                        <label
                          htmlFor={pizza.text}
                          className="text-[18px] font-medium"
                        >
                          {pizza.text}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="justify-center flex gap-2 mt-3">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border-[1px] w-[120px] md:w-[100px] rounded-[5px]"
                  />
                  <button
                    className="text-[18px] md:text-[14px] btn bg-red-500 rounded-[5px] hover:bg-red-700"
                    onClick={handleClick}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}
