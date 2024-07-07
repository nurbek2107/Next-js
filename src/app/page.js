import React from 'react'
  import Link from 'next/link'
  const getData =  async () =>{
    const request = await fetch("https://dummyjson.com/products")
    
    const data = await request.json()

    return data
  }
  async function App() {
    const {products} = await getData()
    console.log(products)
    return (

      <div className='flex   gap-14 mt-10 flex-wrap'>
        {products.map((product) => {
          return <div key={product.id}>
            <div className="card bg-base-100 w-80 h-[600px] shadow-xl  hover:shadow-none ease-in duration-300 ">
              <figure>
                <img className='w-full ' src={product.images[0]} alt={product.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{ product.title}</h2>
                <p>{ product.description}</p>
                <div className="card-actions justify-end">
                  <Link href={`/singleProduct/${product.id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
              </div>
            </div>
          
          </div>
        })}
      </div>
    )
  }

  export default App