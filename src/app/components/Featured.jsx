import React from "react";
import Image from "next/image";

export default function Featured() {
  const images = [
    "/img/pizza.png",
    "/img/pizza.png",
    "/img/pizza.png",
    "/img/pizza.png",
  ];

  return (
    <div className="carousel w-full h-[55vh] md:h-[calc(100vh-100px)]">
      {images.map((img, id) => {
        return (
          <div
            id={`slide${id}`}
            key={id}
            className="carousel-item relative w-full bg-[#e3421a] flex justify-center items-center"
          >
            <img src={img} className="w-[50%] h-[45%] md:w-[30%] md:h-[75%]" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${id == 0 ? images.length - 1 : id - 1}`}
                className="btn btn-circle bg-[#e3421a] hover:bg-[#c52f0a] text-white border-none shadow-none hover:transition duration-400 ease-in-out"
              >
                ❮
              </a>
              <a
                href={`#slide${id == images.length - 1 ? 0 : id + 1}`}
                className="btn btn-circle bg-[#e3421a] hover:bg-[#c52f0a] text-white border-none shadow-none hover:transition duration-400 ease-in-out"
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
