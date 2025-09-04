"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import OrderDetail from "../components/OrderDetail";

export default function page() {
  // const cart = [
  //   {
  //     img: "/pizzaImg/funghi.jpg",
  //     name: "FUNGHI",
  //     extras: "Double Ingredient, Spicy sauce",
  //     price: "$0",
  //     quantity: 2,
  //     total: "$20",
  //   },
  // ];
  const dispatch = useDispatch();
  const [checkoutClicked, setCheckoutClicked] = useState(false);
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  // const data = {
  //   customer: "Nitin Koli",
  //   address: "Upper Nathanpur Dehradun",
  //   total: 14,
  //   method: 0,
  // };
  // console.log(cart);
  async function createOrder(data) {
    try {
      const res = await axios.post("https://pizza-website-chi-hazel.vercel.app/api/orders", data);
      res.status === 201 && router.push("/orders/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  }

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
            {cart.products.map((product, i) => (
              <tr className="text-[17px]" key={i}>
                <td>
                  <img
                    src={product.img}
                    alt="pizza"
                    className="h-[200px] w-[200px] rounded-[10%]"
                  />
                </td>
                <td>
                  <p className="text-red-600">{product.title}</p>
                </td>
                <td>
                  <div>
                    {product.pizzaOption.map((x, i) => (
                      <p key={i}>{x.text}</p>
                    ))}
                  </div>
                </td>
                <td>
                  <p>${product.price}</p>
                </td>
                <td>
                  <p className="">{product.quantity}</p>
                </td>
                <td>
                  <p className=" font-medium">
                    ${product.price * product.quantity}
                  </p>
                </td>
              </tr>
            ))}

            {/* <tr className="text-[17px]">
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
            </tr> */}
          </tbody>
        </table>
        <div className="pt-[50px] justify-center items-center flex flex-col gap-4 w-full md:hidden">
          {cart.products.map((product, i) => (
            <div className="flex flex-col justify-center items-center">
              <div>
                <img
                  src={product.img}
                  alt="pizza"
                  className="h-[400px] w-[400px] rounded-[10%]"
                />
              </div>
              <div>
                <p className="text-3xl font-medium text-red-600">
                  {product.title.toUpperCase()}
                </p>
              </div>
              <div>
                <p className="text-[26px]">
                  {product.pizzaOption.map((x, i) => (
                    <p key={i}>{x.text}</p>
                  ))}
                </p>
              </div>
              <div className="flex flex-row gap-1 justify-center items-center">
                <p className="text-[26px] font-medium">Price:</p>
                <p className="text-[25px]">${product.price}</p>
              </div>
              <div className="flex flex-row gap-1 justify-center items-center">
                <p className="text-[26px] font-medium">Quantity:</p>
                <p className="text-[25px]">{product.quantity}</p>
              </div>
              <div className="flex flex-row gap-1 justify-center items-center">
                <p className="text-[26px] font-medium">Total Price:</p>
                <p className="text-[28px] font-medium">
                  ${product.price * product.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[10px] md:mt-[0px] bg-[#000000b9] [&_p_span]:font-normal w-[90%] md:w-[30%] h-[30%] text-white p-[50px] ml-[20px] font-bold">
          <span className="text-3xl md:text-2xl">CART TOTAL</span>
          <p className="text-[25px] md:text-[16px] pt-[20px]">
            Subtotal: <span>${cart.total}</span>
          </p>
          <p className="text-[25px] md:text-[16px] ">
            Discount: <span>$0.00</span>
          </p>
          <p className="text-[25px] md:text-[16px] ">
            Total: <span>${cart.total}</span>
          </p>
          <button
            className="text-[20px] md:text-[16px] bg-white text-red-600 mt-[20px] px-[70px] py-[2px] hover:cursor-pointer"
            onClick={() => {
              setCheckoutClicked(true);
              const modal = document.getElementById("my_modal_3");
              if (checkoutClicked && modal) {
                modal.showModal();
              }
            }}
            disabled={cart.total < 1}
          >
            {checkoutClicked ? "CASH ON DELIVERY" : "CHECKOUT NOW"}
            {/* {console.log(cart.total<1)}
            {console.log(checkoutClicked)} */}
          </button>
          <OrderDetail total={cart.total} createOrder={createOrder} />
        </div>
      </div>
      <Footer />
    </>
  );
}
