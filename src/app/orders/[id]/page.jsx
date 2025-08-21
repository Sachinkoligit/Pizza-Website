import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

export default function page() {
  const tracking = [
    {
      id: 0,
      img: "/img/paid.png",
      text: "Payment",
      checkImg: "/img/checked.png",
    },
    {
      id: 1,
      img: "/img/bake.png",
      text: "Preparing",
      checkImg: "/img/checked.png",
    },
    {
      id: 2,
      img: "/img/bike.png",
      text: "On the way",
      checkImg: "/img/checked.png",
    },
    {
      id: 3,
      img: "/img/delivered.png",
      text: "Delivered",
      checkImg: "/img/checked.png",
    },
  ];
  const currentStep = {
    id: -1,
  };

  return (
    <div>
      <Navbar />
      <div className="pt-[120px] md:pt-[150px] min-h-[500px] mb-5">
        <div className="flex flex-col justify-center items-center md:flex md:flex-row gap-5 p-[10px] md:pl-[50px] w-[100%] md:w-[90%]">
          <div className="flex flex-col gap-[50px] w-[100%]">
            <table className="hidden md:table md:w-[100%] md:text-left">
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
                <tr className="text-[17px] leading-[80px]">
                  <td className="">
                    <p>123456789</p>
                  </td>
                  <td>
                    <p className="">Sachin Koli</p>
                  </td>
                  <td>
                    <p>Aadarsh Colony, D.Dun</p>
                  </td>
                  <td>
                    <p className="">$26</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-[28px] w-[100%] px-[5px] flex flex-col gap-1 justify-center items-center md:hidden">
              <div className="flex flex-row gap-[3px]">
                <p className="font-medium">Order ID:</p>
                <p>123456789</p>
              </div>
              <div className="flex flex-row gap-[3px]">
                <p className="font-medium">Customer:</p>
                <p className="">Sachin Koli</p>
              </div>
              <div className="flex flex-row gap-[3px]">
                <p className="font-medium">Address:</p>
                <p>Aadarsh Colony</p>
              </div>
              <div className="flex flex-row gap-[3px]">
                <p className="font-medium">Total:</p>
                <p className="">$26</p>
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
              Subtotal: <span>$26</span>
            </p>
            <p className="text-[25px] md:text-[16px] ">
              Discount: <span>$0.00</span>
            </p>
            <p className="text-[25px] md:text-[16px]">
              Total: <span>$26</span>
            </p>
            <button className="bg-white text-black mt-[20px] px-[100px] py-[2px] hover:cursor-pointer">
              PAID
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
