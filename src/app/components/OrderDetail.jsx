"use client";

import React, { useState } from "react";

export default function OrderDetail({ total, createOrder }) {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  // const [number, setNumber] = useState();

  function handleClick() {
    createOrder({ customer, address, total, method: 0 });
    // console.log({name,address,total,method:0});
  }

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-[100%]">
          <form method="dialog" className="w-[100%]">
            <button className="btn btn-sm btn-circle btn-dark absolute right-2 top-2">
              ✕
            </button>
            <div className="w-[100%] mt-[10px] bg-white text-black">
              <div className="flex flex-col gap-[20px]">
                <h1 className="text-3xl">
                  You will pay ${total} after delivery.
                </h1>
                <div className="[&>div>input]:border-1 flex flex-col gap-2 [&>div>label]:font-medium [&>div>input]:p-[5px]">
                  <div className="flex flex-col gap-1 ">
                    <label>Full_Name</label>
                    <input
                      className="text-[15px] font-medium"
                      type="text"
                      value={customer}
                      onChange={(e) => setCustomer(e.target.value)}
                      placeholder="Sachin Koli"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label>Phone_Number</label>
                    <input
                      // type="number"
                      // value={number}
                      // onChange={(e) => setNumber(e.target.value)}
                      className="text-[15px] font-medium"
                      placeholder="8393839398"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label>Address</label>
                    <input
                      className="text-[15px] font-medium"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="X Street, XYZ Colony, D.Dun"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    className="py-[6px] px-[10px] btn btn-success border-2"
                    onClick={handleClick}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
}
