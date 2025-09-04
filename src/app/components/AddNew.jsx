import axios from "axios";
import React, { useState } from "react";

export default function AddNew() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [extraOption, setExtraOption] = useState({ text: "", price: 0 });
  const [extra, setExtra] = useState([]);
  let [sizePrice, setSizePrice] = useState([]);

  async function handleAdd(e) {
    e.preventDefault();
    console.log(title, desc, sizePrice, extra);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dnfuwt7kv/image/upload",
        data
      );
      const newProduct = {
        title,
        description: desc,
        prices: sizePrice,
        extraOptions: extra,
        img: uploadRes.data.url,
      };
      await axios.post("https://pizza-website-chi-hazel.vercel.app/api/products", newProduct);
      // console.log(uploadRes.data.url);
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  }
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-[100%]">
          <form method="" className="w-[100%]">
            <button
              className="btn btn-sm btn-circle btn-dark absolute right-2 top-2 "
              onClick={(e) => {
                document.getElementById("my_modal_2").close();
              }}
            >
              ✕
            </button>
            <div className="w-[100%] mt-[10px] bg-white text-black">
              <div className="w-[100%] flex flex-col gap-[20px] [&>div>label]:font-medium [&>div>input]:border-b-1 [&>input]:outline-0 justify-center items-start">
                <h1 className="text-3xl font-bold">Add New Pizza</h1>
                <div className="flex flex-col  items-start w-full">
                  <label>Choose an image</label>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="cursor-pointer border-1 rounded-[5px] p-[3px] w-[200px] bg-yellow-50 hover:cursor-pointer"
                  />
                </div>
                <div className="flex flex-col w-full items-start">
                  <label>Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="outline-0 w-[100%]"
                  />
                </div>
                <div className="flex flex-col  items-start w-full">
                  <label>Desc</label>
                  <textarea
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    rows={3}
                    className="border-1 outline-0 w-full"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label>Prices</label>
                  <div className="flex flex-row justify-start gap-[40px] [&>input]:border-b-1 [&>input]:outline-0">
                    <input
                      type="number"
                      placeholder="small"
                      className="w-[130px]"
                      value={sizePrice[0]}
                      onChange={(e) => {
                        const newVal = Number(e.target.value);
                        setSizePrice((prev) => {
                          const updated = [...prev];
                          updated[0] = newVal;
                          return updated;
                        });
                      }}
                    />
                    <input
                      type="number"
                      placeholder="medium"
                      className="w-[130px]"
                      value={sizePrice[1]}
                      onChange={(e) => {
                        const newVal = Number(e.target.value);
                        setSizePrice((prev) => {
                          const updated = [...prev];
                          updated[1] = newVal;
                          return updated;
                        });
                      }}
                    />
                    <input
                      type="number"
                      placeholder="large"
                      className="w-[130px]"
                      value={sizePrice[2]}
                      onChange={(e) => {
                        const newVal = Number(e.target.value);
                        setSizePrice((prev) => {
                          const updated = [...prev];
                          updated[2] = newVal;
                          return updated;
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <label>Extra</label>
                  <div className="w-full flex flex-row justify-between [&>input]:w-[130px] [&>input]:border-b-1 [&>input]:outline-none">
                    <input
                      type="text"
                      value={extraOption.text}
                      onChange={(e) =>
                        setExtraOption((prev) => ({
                          ...prev,
                          text: e.target.value,
                        }))
                      }
                      placeholder="item"
                      required
                    />
                    <input
                      type="number"
                      placeholder="price"
                      required
                      value={extraOption.price}
                      onChange={(e) =>
                        setExtraOption((prev) => ({
                          ...prev,
                          price: Number(e.target.value),
                        }))
                      }
                    />
                    <button
                      className="btn "
                      type="button"
                      onClick={() =>
                        extraOption.name !== "" &&
                        extraOption.price !== 0 &&
                        setExtra((prev) => [...prev, extraOption])
                      }
                    >
                      Add
                    </button>
                  </div>
                </div>
                <div className="flex flex-row gap-2 flex-wrap">
                  {/* {console.log(extra)} */}
                  {extra &&
                    extra.map(
                      (xtra, i) =>
                        xtra.text !== "" && (
                          <div
                            className="bg-red-500 px-5 py-2 rounded-2xl text-white relative cursor-default"
                            key={i}
                          >
                            {`${xtra.text}`}
                            <span
                              className="text-[10px] absolute top-1 right-1 pl-[4px] hover:cursor-pointer"
                              onClick={() => {
                                setExtra(
                                  extra.filter(
                                    (current) => xtra.text !== current.text
                                  )
                                );
                              }}
                            >
                              ❌
                            </span>
                          </div>
                        )
                    )}
                </div>
                <div className="flex flex-col items-end w-full">
                  <button
                    className="btn btn-success px-[40px]"
                    onClick={(e) => {
                      handleAdd(e);
                      document.getElementById("my_modal_2").close();
                    }}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
