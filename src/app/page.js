// pages/index.js
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Carousel } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Checkbox
} from "@material-tailwind/react";

const getData = async () => {
  const request = await fetch("https://dummyjson.com/products");
  const data = await request.json();
  return data;
};

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const { products } = await getData();
      setProducts(products);
      setFilteredProducts(products);

      const uniqueCategories = ['All', ...new Set(products.map(product => product.category))];
      setCategories(uniqueCategories);
    };

    fetchData();
  }, []);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);

    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <Carousel autoplay={{ delay: 3000 }} loop={true} transition={{ duration: 2 }} className="rounded-xl h-96">
        {products.slice(0, 30).map((product, index) => (
          <Card key={index} className="w-full max-w-[48rem] flex-row m-auto h-80 bg-base-100">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-full w-full object-cover bg-base-100"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="gray" className="mb-4 uppercase text-white">
                {product.title}
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2 text-white">
                Lyft launching cross-platform service this week
              </Typography>
              <Typography color="gray" className="mb-8 font-normal text-white">
                {product.description}
              </Typography>
              <Link href={`/singleProduct/${product.id}`} passHref>
                <Button variant="text" className="flex items-center gap-2 text-white">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </Link>
            </CardBody>
          </Card>
        ))}
      </Carousel>

      <div className="flex gap-2 mb-4 justify-center mt-10">
        {categories.map((category, index) => (
          <Button
            key={index}
            onClick={() => handleFilterChange(category)}
            className={`select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${category === selectedCategory ? 'bg-blue-gray-50 text-blue-gray-900' : 'hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900'}`}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className='flex gap-5 mt-10 flex-wrap'>
        {filteredProducts.map((product) => (
          <div key={product.id} className="w-[350px]">
            <Card className='bg-base-100'>
              <CardHeader shadow={false} floated={false} className="h-96">
                <img
                  src={product.images[0]}
                  alt="card-image"
                  className="h-full w-full object-cover bg-blue-gray-700"
                />
              </CardHeader>
              <CardBody>
                <div className="mb-2 flex items-center justify-between">
                  <Typography color="blue-gray" className="font-medium text-white">
                    {product.title}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium text-white">
                    ${product.price.toFixed(2)}
                  </Typography>
                </div>

                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal opacity-75 text-white"
                >
                  {product.description}
                </Typography>
              </CardBody>
              <CardFooter>
                <div className='flex gap-5 w-full'>
                  <Link href={`/singleProduct/${product.id}`} passHref>
                    <Button
                      ripple={false}
                      fullWidth={true}
                      className="bg-blue-gray-800 text-blue-gray-200 w-60 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 text-white"
                    >
                      Add to Cart
                    </Button>
                  </Link>
                  <Checkbox
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                    defaultChecked
                  />
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
