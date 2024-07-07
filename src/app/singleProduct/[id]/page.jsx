"use client";
import { Rating, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

const getData = async (id) => {
  const request = await fetch("https://dummyjson.com/products/" + id);
  const data = await request.json();
  return data;
};

function Page({ params }) {
  const [product, setProduct] = useState(null);
  const [active, setActive] = useState("");
  const [rated, setRated] = useState(params.rating || 4); // Initialize with params.rating or default to 4

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getData(params.id);
      setProduct(productData);
      if (productData && productData.images.length > 0) {
        setActive(productData.images[0]); // Set the first image as active initially
      }
    };

    fetchData();
  }, [params.id, params.rating]); // Include params.rating in dependency array

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-24 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-blue-gray-700 dark:bg-gray-700 mb-4">
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                    src={active}
                    alt=""
                  />
                </div>
                <div className="grid grid-cols-5 gap-4">
                  {product.images.map((imgelink, index) => (
                    <div key={index}>
                      <img
                        onClick={() => setActive(imgelink)}
                        src={imgelink}
                        className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center -mt-7"
                        alt="gallery-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {product.description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  ${product.price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  In Stock
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Select Color:
              </span>
              <div className="flex items-center mt-2">
                <div className="flex items-center gap-2 font-bold text-blue-gray-500">
                  {rated}.7
                  <Rating value={rated} onChange={(value) => setRated(value)} />
                  <Typography
                    color="blue-gray"
                    className="font-medium text-blue-gray-500"
                  >
                    Based on 134 Reviews
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Select Size:
              </span>
              <div className="flex items-center mt-2">
                <button className="bg-gray-700 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  S
                </button>
                <button className="bg-gray-700 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  M
                </button>
                <button className="bg-gray-700 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  L
                </button>
                <button className="bg-gray-700 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XL
                </button>
                <button className="bg-gray-700 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XXL
                </button>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
