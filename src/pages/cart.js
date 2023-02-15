import React, { useState } from 'react'


export default function cart(props) {
  // debugger
    console.log(props.CartDetails);
    let count=0;
    for(var i=0;i<props.CartDetails.length;i++)
    {
      count=count+props.CartDetails[i];
    }
   

    // console.log(count);
  return (
    <div className='container flexer text-center bg-light border border-dark cart-block'>
      
      <div>
        <div className='bg-dark text-white'> Item Title</div>
      {props.cartItems.map((data)=>(
        <div>
          <p>{data}</p>
        </div>
      )
      )}
      <div  className='bg-dark text-white'>Total items : {i}</div>
      </div>
      <div>
        <div  className='bg-dark text-white'>Price</div>
      {props.CartDetails.map((data)=>(
        <div>
          <p>{data}</p>
        </div>
      )
      )}
      <div  className='bg-dark text-white'>{count}</div> 
      </div>
      {/* {props.CartDetails} */}
      {/* {props.cartItems} */}
    </div>
  )
}
