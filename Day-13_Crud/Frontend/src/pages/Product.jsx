import React, { useEffect, useState } from "react";
import axios from "axios";

export const Product = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // how many products per page

  const API = `http://localhost:9000/product`;

  const getApiData = async () => {
    try {
      const res = await axios(API);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  // Pagination logic
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Product</h1>

      <div className="grid grid-cols-3 gap-10 px-15">
        {currentItems.map((el, id) => (
          <div
            className="flex flex-col gap-7 py-2 items-center border-2 rounded-[15px]"
            key={id}
          >
            <img
              src={el.image}
              alt=""
              className="h-70 w-100 mt-5 rounded-[15px]"
            />

            <div className="flex flex-col w-97 gap-3">
              <h3 className="font-bold">{el.title}</h3>
              <p className="truncate">{el.description}</p>
              <p className="font-bold">{el.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center gap-3 mt-6">
        <button
          className="px-4 py-2 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-4 py-2 border rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};
