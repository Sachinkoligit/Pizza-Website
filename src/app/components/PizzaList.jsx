import React from "react";
import PizzaCard from "./PizzaCard";

export default function PizzaList() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "/pizzaImg/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "/pizzaImg/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "/pizzaImg/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "/pizzaImg/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "/pizzaImg/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "/pizzaImg/prosciutto.jpg",
      soldOut: false,
    },
  ];

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
        {pizzaData.map((data, i) => {
          return (
            <PizzaCard
              img={data.photoName}
              name={data.name}
              price={data.price}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
