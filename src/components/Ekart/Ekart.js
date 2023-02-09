

import React, { useEffect, useState } from 'react'
import './Ekart.css';
import { Link } from 'react-router-dom';
// import data from './data.js';
export default function Ekart() {

   const [prod,setProd]=useState(["Welcome To E-Store"]);
   let cstyle=
   {
    background:"white",
    color:"black"
   };

   const getProd=async()=>
   {
        const resp= await fetch("https://fakestoreapi.com/products");
        setProd(await resp.json())
        // console.log(await resp.json());
   }

   useEffect(()=>
   {
        getProd();
   },[])
  return (
    <div className='Ekart container text-center'>
     
        {/* Ekart Data */}
      {prod.map((prod)=>
      {
       let da="product/"+prod.id;
        // if(prod.rating.rate < 3)
        // {
        //      cstyle=
        //     {
        //         background:"red",
        //         color:"white",
        //         border:"1px solid black"
        //     }
        // }
        // else{
        //     cstyle=
        //     {
        //         background:"green",
        //         color:"white",
        //         border:"1px dashed black"
        //     }
        // }
        return <ul className='prod '  id={prod.id}>

                <li style={cstyle}><b>Item :</b> {prod.title}</li>
                <li><Link to={da}><img src={prod.image} alt="product-image" className='border border-dark hov' width="100px" height="100px" /></Link></li>
                <li><b>Description : </b></li>
                <li><i>{prod.description}</i></li>
                <li><b>Price :</b>${prod.price}</li>
                {/* <li>{prod.rating.rate }</li> */}
                {/* <li>{prod.rating.rate <3 ? "Low " : "HIgher"}</li> */}
                <button className='btn btn-success' id={prod.id} onClick={()=>{alert("Please write an email. Given at the end of this page")}}>buy now</button>
            </ul> 
        
      })}
      <span className='text-center text-white'>
        <span className="material-symbols-outlined">
            local_shipping
        </span>
         For any items mail us &copy; jeevan.kadimi@innovasolutions.in 
        <span className="material-symbols-outlined">
            local_shipping
        </span>
      </span>
      <span className='text-center text-white'>
      <span className="material-symbols-outlined">
        storefront
      </span>
        Happy Shopping
        <span className="material-symbols-outlined">
            storefront
        </span>
      </span>
    </div>
  )
}
