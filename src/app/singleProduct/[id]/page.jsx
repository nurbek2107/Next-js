import React from 'react'
  const getData = async (id) => {
    const request = await fetch("https://dummyjson.com/products/"+ id);

    const data = await request.json();

    return data;
  };
  async function page({params}) {
    const  products  = await getData(params.id);
      return <div>{ products.title}</div>;
  }

export default page