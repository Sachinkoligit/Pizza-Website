import React, { useEffect, useState } from "react";
import PizzaCard from "./PizzaCard";
import axios from "axios";

export default function PizzaList() {
  const [pizzaList, setPizzaList] = useState([]);
  // const pizzaData = [
  //   {
  //     title: "Focaccia",
  //     ingredients: "Bread with italian olive oil and rosemary",
  //     prices: 6,
  //     img: "/pizzaImg/focaccia.jpg",
  //     soldOut: false,
  //   },
  //   {
  //     title: "Margherita",
  //     ingredients: "Tomato and mozarella",
  //     prices: 10,
  //     img: "/pizzaImg/margherita.jpg",
  //     soldOut: false,
  //   },
  //   {
  //     title: "Spinaci",
  //     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
  //     prices: 12,
  //     img: "/pizzaImg/spinaci.jpg",
  //     soldOut: false,
  //   },
  //   {
  //     title: "Funghi",
  //     ingredients: "Tomato, mozarella, mushrooms, and onion",
  //     prices: 12,
  //     img: "/pizzaImg/funghi.jpg",
  //     soldOut: false,
  //   },
  //   {
  //     title: "Salamino",
  //     ingredients: "Tomato, mozarella, and pepperoni",
  //     prices: 15,
  //     img: "/pizzaImg/salamino.jpg",
  //     soldOut: true,
  //   },
  //   {
  //     title: "Prosciutto",
  //     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
  //     prices: 18,
  //     img: "/pizzaImg/prosciutto.jpg",
  //     soldOut: false,
  //   },
  // ];
  // pizzaList = axios.get("http://localhost:3000/api/products").data;
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await axios.get("https://pizza-website-steel.vercel.app/api/products");
        const data = res.data;
        setPizzaList(data);
      } catch (err) {
        console.log("pizza error", err);
      }
    };
    fetchPizza();
  }, []);
  return (
    <div className="mb-10 flex flex-col gap-6 pt-10 justify-center items-center">
      <h1 className="px-[50px] text-center text-3xl font-semibold">
        THE BEST PIZZA IN THE TOWN
      </h1>
      <div className="h-auto text-[24px] text-[#444] w-[70%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi
        harum possimus sed animi dolorem! Minus quod reprehenderit quam aperiam
        mollitia hic ullam, quibusdam, rerum quidem maiores repellat quas vero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className="flex flex-col md:flex md:flex-row items-center justify-center w-[100%] md:flex-wrap">
        {pizzaList &&
          pizzaList.map((data) => {
            return (
              <PizzaCard
                pizza_id={data._id}
                img={data.img}
                title={data.title}
                prices={data.prices[0]}
                description={data.description}
                key={data._id}
              />
            );
          })}
      </div>
    </div>
  );
}
