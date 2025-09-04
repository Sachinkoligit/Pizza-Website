import React from "react";
import Link from "next/link";

export default function PizzaCard({
  img,
  title,
  prices,
  description,
  pizza_id,
}) {
  return (
    <Link
      href={`/product/${pizza_id}`}
      className="w-[100%] md:w-[40%] p-2.5 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition duration-300"
    >
      <div className="card bg-base-100 w-full h-[500px] shadow-sm">
        <figure className="">
          <img src={img} alt="pizza" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex items-center gap-[30px] text-2xl">
            {title.toUpperCase()}
            <div className="badge badge-secondary text-xl py-3">$ {prices}</div>
          </h2>
          <p className="text-[20px] text-[#870613]">{description}</p>
        </div>
      </div>
    </Link>
  );
}
