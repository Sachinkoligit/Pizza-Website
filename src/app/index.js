"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import PizzaList from "./components/PizzaList";
import store from "./redux/store";
import { Provider } from "react-redux";
import axios from "axios";

export default function layout({ pizzaList }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-[100px]">
        <Featured />
        <PizzaList pizzaList={pizzaList} />
      </div>
      <Footer />
    </>
  );
}
