import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Featured from "./Featured";
import PizzaList from "./PizzaList";

export default function layout() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-[100px]">
        <Featured />
        <PizzaList/>
      </div>
      <Footer />
    </>
  );
}
