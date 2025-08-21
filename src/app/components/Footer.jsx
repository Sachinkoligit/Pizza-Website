import React from "react";

export default function Footer() {
  return (
    <div className="[&_p]:text-[20px] [&_span]:text-[30px] pt-2 p-[10px] h-[100%] flex flex-col justify-center md:flex md:flex-row w-[100%] md:justify-between bg-[#211f1f] text-white">
      <div className="hidden md:flex md:w-[40%]">
        <img src="/img/bg.png" />
      </div>
      <div className="pt-[20px] md:pt-[100px] font-bold text-xl w-[100%] md:w-[20%]">
        <span>OH YES, WE DID.THE SK PIZZA, WELL BAKED SLICE OF PIZZA.</span>
      </div>
      <div className="pt-[20px] md:pt-[100px] flex flex-col gap-3 w-[100%] md:w-[15%]">
        <span className="font-bold text-yellow-500">FIND OUR RESTAURANTS</span>
        <p>1653 R.Don Road #304.NewYork, 248009 (110) 865-1100</p>
        <p>2567 K.Laquie Road #304.NewYork, 358009 (110) 865-1100</p>
        <p>1614 E. Erwin St Road #3004.NewYork, 2480 (110) 865-1100</p>
        <p>1655 W. Caroll St# Road #304.NewYork, 8009 (110) 865-1100</p>
      </div>
      <div className="pt-[20px] md:pt-[100px] flex flex-col gap-3 w-[100%] md:w-[15%]">
        <span className="font-bold text-yellow-500">WORKING HOURS</span>
        <p>MONDAY UNTIL FRIDAY 9:00-22:00</p>
        <p>SATURDAY-SUNDAY 12:00-24:00</p>
      </div>
    </div>
  );
}
