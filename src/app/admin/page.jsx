"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useRouter } from "next/navigation";
import { redirect } from "next/dist/server/api-utils";
import AddNew from "../components/AddNew";

export default function index() {
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const status = ["preparing", "on the way", "delivered", "paid"];
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("https://pizza-website-chi-hazel.vercel.app/api/products");
        const data = res.data;
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);

  const fetchOrder = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/orders");
      const data = res.data;
      setOrder(data);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   const token = document.cookie
  //     .split("; ")
  //     .find((row) => row.startsWith("token="))
  //     ?.split("=")[1];

  //   console.log(token);
  //   if (token !== process.env.TOKEN) {
  //     router.push("/admin/login");
  //   }
  // }, []);

  useEffect(() => {
    fetchOrder();
  }, []);

  async function handleClick(id) {
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/products/" + id
      );
      setProduct((product) => product.filter((x) => x._id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleNext(id, status) {
    try {
      const res = await axios.put("http://localhost:3000/api/orders/" + id, {
        status: status + 1,
      });
      fetchOrder();
      setOrder([res.data, ...order.filter((order) => order._id !== id)]);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Navbar />
      <div className="pt-[150px] min-h-[450px] w-full flex flex-row text-center">
        <div className="px-[20px] w-[45%]">
          <button
            className="btn bg-[#e3421a] text-white absolute top-[105px] left-[18px]"
            onClick={() => {
              const modal = document.getElementById("my_modal_2");
              modal.showModal();
            }}
          >
            Add New Pizza
          </button>
          <AddNew />
          <h1 className="text-left text-2xl font-bold mb-[30px]">Products</h1>
          <table className="text-left w-full border-separate border-spacing-y-4">
            <thead>
              <tr>
                <th>Image</th>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {product &&
                product.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <img src={product.img} className="h-[50px] w-[50px]" />
                    </td>
                    <td className="w-[40%]">{product._id}</td>
                    <td>{product.title}</td>
                    <td>${product.prices[0]}</td>
                    <td>
                      <div className="flex flex-row gap-2">
                        <button className="btn btn-success">Edit</button>
                        <button
                          className="btn bg-red-500"
                          onClick={() => handleClick(product._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="px-[20px] w-[55%]">
          <h1 className="text-left text-2xl font-bold mb-[30px]">Orders</h1>
          <table className="text-left w-full border-separate border-spacing-y-4 border-spacing-x-4">
            <thead>
              <tr>
                <th>Id</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {order && (
                <>
                  {/* {console.log(order)} */}
                  {order.map((item) => (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.customer}</td>
                      <td>${item.total}</td>
                      <td>{status[item.status]}</td>
                      <td>{item.address}</td>
                      <td>
                        <button
                          className="btn btn-info"
                          onClick={() => handleNext(item._id, item.status)}
                        >
                          Next Stage
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

// export const getServerSideProps = async (ctx) => {
//   const myCookie = ctx.req?.cookies || "";
//   if (myCookie.token !== process.env.TOKEN) {
//     return {
//       redirect: {
//         destination: "/admin/login",
//         permanent: false,
//       },
//     };
//   }
// };
