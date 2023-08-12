import React, {useContext} from 'react'
import { DataContext } from '../context/DataContext'
import ProductCard from '../component/ProductCard';
const Home = () => {

    const {products, } = useContext(DataContext);
    console.log("products", products)
  return (
    <main className='w-full h-auto border-2 border-black flex flex-col'>
      <div className="">
        <input type="text" placeholder='search' />
      </div>
      <hr />
      <div className="w-full h-[400px] flex flex-col p-3">
        <p className='text-xl font-medium pl-6 tracking-wider'>Currently Reading</p>
        <div className="w-full h-[95%] flex items-center justify-center">
        {
            products?.filter((product) =>
                product.categoryName === "currently-Reading"
            ).map((product) => (
                <ProductCard product={product} key={product._id}/>
            ))
        }
        </div>
      </div>
      <hr />

      <hr />
      <div className="w-full h-[500px] flex  flex-col">
        <p className='text-xl font-medium pl-6 tracking-wider'>Want to Read</p>
        <div className="w-full h-[95%] flex items-center justify-center">
        {
            products?.filter((product) =>
                product.categoryName === "want-to-read"
            ).map((product) => (
                <ProductCard product={product} key={product._id}/>
            ))
        }
        </div>
      </div>
      <hr />

      <hr />
      <div className="w-full h-[500px] flex flex-col">
        <p className='text-xl font-medium pl-6 tracking-wider'>Read</p>
        <div className="w-full h-[95%] flex items-center justify-center">
        {
            products?.filter((product) =>
                product.categoryName === "read"
            ).map((product) => (
                <ProductCard product={product} key={product._id}/>
            ))
        }
        </div>
      </div>
      <hr />

    </main>
  )
}

export default Home
