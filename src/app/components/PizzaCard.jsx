import React from "react";

export default function PizzaCard({ img, name, price }) {
  return (
    <div className="w-[100%] md:w-[40%] p-2.5 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition duration-300">
      <div className="card bg-base-100 w-[100%] h-[500px] shadow-sm">
        <figure>
          <img src={img} alt="pizza" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex items-center gap-[30px] text-2xl">
            {name.toUpperCase()}
            <div className="badge badge-secondary text-xl py-3">$ {price}</div>
          </h2>
          <p className="text-[20px] text-[#870613]">
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
      </div>
    </div>
  );
}
