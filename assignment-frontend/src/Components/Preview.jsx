import React from "react";
import { Link, useLocation } from "react-router-dom";

const Preview = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="text-center text-lg font-semibold py-10">
        No product data available.
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray-100 py-12 px-6">
        <div className="flex justify-start items-center px-6 py-4">
          <Link
            to="/"
            className="flex items-center px-6 py-2 bg-green-100 text-gray-700 rounded-full hover:bg-blue-300 transition"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-medium">Back</span>
          </Link>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={product.imageUrl || "fallback-image.jpg"}
              alt={product.name || "Product"}
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800">
              {product.name || "Product Name"}
            </h2>
            <p className="text-gray-600 text-lg mt-2">
              {product.brand || "Brand"}
            </p>

            <div className="mt-4">
              <span className="text-3xl font-bold text-blue-600">
                ${product.price || "N/A"}
              </span>
            </div>

            <p className="text-gray-700 mt-6 text-lg">
              {product.description || "Product description goes here."}
            </p>

            <div className="flex gap-6 mt-8">
              <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition flex gap-2 items-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>

              <button className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-400 transition flex gap-2 items-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
