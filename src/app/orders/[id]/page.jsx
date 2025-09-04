"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function page() {
  const tracking = [
    {
      id: 0,
      img: "/img/bake.png",
      text: "Preparing",
      checkImg: "/img/checked.png",
    },
    {
      id: 1,
      img: "/img/bike.png",
      text: "On the way",
      checkImg: "/img/checked.png",
    },
    {
      id: 2,
      img: "/img/delivered.png",
      text: "Delivered",
      checkImg: "/img/checked.png",
    },
    {
      id: 3,
      img: "/img/paid.png",
      text: "Payment",
      checkImg: "/img/checked.png",
    },
  ];
  const { id } = useParams();
  // const id = "68adeaa8815f343137b79acb";
  const [Order, setOrder] = useState(null);
  const [orderStatus, setOrderStatus] = useState(null);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const res = await axios.get(`/api/orders/${id}`);
        setOrder(res.data);
        setOrderStatus(res.data[0].status);
      } catch (err) {
        console.log("Failed to fetch Order", err);
      }
    }

    fetchOrder();
  }, [id]);

  const currentStep = {
    id: orderStatus,
  };
  // console.log(Order);
  return (
    <div>
      <Navbar />
      <div className="pt-[120px] md:pt-[150px] min-h-[500px] mb-5">
        <div className="flex flex-col justify-center items-center md:flex md:flex-row gap-5 p-[10px] md:pl-[50px] w-[100%] md:w-[90%]">
          {Order && (
            <>
              <div className="flex flex-col gap-[50px] w-[100%]">
                <table className="hidden md:table md:w-[100%] md:text-center">
                  <thead>
                    <tr className="font-bold">
                      <th className="w-[25%]">
                        <p>Order ID</p>
                      </th>
                      <th className="w-[25%]">
                        <p>Customer</p>
                      </th>
                      <th className="w-[30%]">
                        <p>Address</p>
                      </th>
                      <th className="w-[25%]">
                        <p>Total</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-[17px]">
                      <td className="">
                        <p>1{Order[0]._id}</p>
                      </td>
                      <td>
                        <p className="">{Order[0].customer}</p>
                      </td>
                      <td>
                        <p>{Order[0].address}</p>
                      </td>
                      <td>
                        <p className="">${Order[0].total}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-[28px] w-[100%] mx-[8px] flex flex-col gap-1 justify-center items-center md:hidden">
                  <div className="flex flex-row gap-[3px]">
                    <p className="font-medium">Order ID:</p>
                    <p>{`${Order[0]._id.slice(0, 4)}.....${Order[0]._id.slice(
                      -4
                    )}`}</p>
                  </div>
                  <div className="flex flex-row gap-[3px]">
                    <p className="font-medium">Customer:</p>
                    <p className="">{Order[0].customer}</p>
                  </div>
                  <div className="flex flex-row gap-[3px]">
                    <p className="font-medium">Address:</p>
                    <p>{Order[0].address}</p>
                  </div>
                  <div className="flex flex-row gap-[3px]">
                    <p className="font-medium">Total:</p>
                    <p className="">${Order[0].total}</p>
                  </div>
                </div>
                <div className="[&_img]:h-[60px] [&_img]:w-[60px] flex flex-col gap-[20px] md:flex md:flex-row md:gap-[15%] md:[&_img]:h-[40px] md:[&_img]:w-[40px] pl-[20px] [&>div>img:nth-of-type(2)]:h-[30px] [&>div>img:nth-of-type(2)]:w-[30px] [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:items-center">
                  {tracking.map((x) => {
                    return (
                      <div
                        key={x.id}
                        className={`${
                          currentStep.id >= 0 && x.id <= currentStep.id
                            ? ""
                            : "opacity-[50%]"
                        } justify-center items-center`}
                      >
                        <img src={x.img} />
                        <p>{x.text}</p>
                        <img src={x.checkImg} />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="items-center text-center bg-[#000000b9] [&_p_span]:font-normal w-[90%] md:w-[30%] h-[30%] text-white p-[50px] font-bold">
                <span className="text-3xl md:text-2xl">CART TOTAL</span>
                <p className="text-[25px] md:text-[16px] pt-[20px]">
                  {" "}
                  Subtotal: <span>${Order[0].total}</span>
                </p>
                <p className="text-[25px] md:text-[16px] ">
                  Discount: <span>$0.00</span>
                </p>
                <p className="text-[25px] md:text-[16px]">
                  Total: <span>${Order[0].total}</span>
                </p>
                <button className="bg-white text-black mt-[20px] px-[60px] py-[2px]">
                  C.O.D
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
