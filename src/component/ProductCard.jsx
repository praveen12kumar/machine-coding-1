import React, {useState, useContext} from 'react'
import {IoMdArrowDropdown} from "react-icons/io"
import { DataContext } from '../context/DataContext'



const ProductCard = ({product}) => {
    
    const {DataDispatch} = useContext(DataContext);
    const {title, author, price, image} = product
    const [open, setOpen] = useState(false);
    
    const handleMenuOption = (title, value)=>{
    
      const category = [title, value];
      DataDispatch({
        type:"changeCategory",
        payload: category
      })
    
}
  
  
    return (
    <main className='w-[220px] h-[300px] flex flex-col p-2 mx-4 shadow-lg relative'>
        <img className='w-[100%] h-[60%] ' src={image} alt="" />
        <p className=''>{title}</p>
        <p className=''>{author}</p>
        <p className="">Price <span className='before:content-["₹"] font-medium' >{price}</span></p>

        
       <div className="absolute left-40 top-60 ">
       <div className="w-44 h-24 relative z-30 ">
            <button  className='w-[35px] h-[35px] bg-black text-white rounded-full flex items-center justify-center text-2xl' onClick={()=> setOpen(!open)}> <IoMdArrowDropdown/> </button>
            {open ? (
       <div className="border-1 border-red-700">
       <p className="heading">Move to...</p>
       <div>
         <div
           className=""
           onClick={(e) => {
             handleMenuOption(product.title, "currently-Reading");
           }}
         >
           <p>
             {product.categoryName === "currently-Reading" && "\u2713"} Currently
             Reading
           </p>
         </div>
         <div
           className=""
           value='want-to-read'
           onClick={(e) => {
             handleMenuOption(product.title, "want-to-read");
           }}
         >
           <p>
             {product.categoryName === "want-to-read" && "\u2713"} Want to Read
           </p>
         </div>
         <div
           className=""
           value='read'
           onClick={(e) => {
             handleMenuOption(product.title, "read");
           }}
         >
           <p> {product.categoryName === 'read' && "\u2713"} Read</p>
         </div>
       </div>
     </div>
      ) : null}
    </div>
       </div>
        

    
    </main>
  )
}

export default ProductCard