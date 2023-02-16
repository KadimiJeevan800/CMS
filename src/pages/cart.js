import React from "react";

export default function cart(props) {
  // debugger
  // console.log(props.CartDetails);
  let count = 0;
  const gst=18;
  for (var i = 0; i < props.cartData.length; i++) {
    count = count + props.cartData[i].price;
  }
  //  console.log("Total :"+Math.round(count));
  const Total = Math.round(count);

  const gtot=Total+(Total* (gst/100));

  // console.log(props.cartData);

  // console.log(count);
  return (
    <div className="container cart-page bg-light">
    <div className="container flexer text-center bg-light border border-dark cart-block">
      <div>
        <div className="bg-dark text-white"> Item Title</div>

        {/* { props.CartDetails.length ? "NO Items " : "Items"} */}
        { props.cartData.length ?  props.cartData.map((data) => (
          <div>
            <p>{data.title}</p>
          </div>
        )) : <div className="text-end text-danger">  Cart is Empty </div>}
        <div className="bg-dark text-white">

          <div>  Total items {i} Cost :</div>
          <div>Gst % : </div>
          <div>Sub Total : </div>
           
          
        </div>
      </div>
      <div>
        <div className="bg-dark text-white">Price</div>
        { props.cartData.length  ? props.cartData.map((data) => (
          <div>
            <p>{data.price}</p>
          </div>
        )): ".."}
        <div className="bg-dark text-white">
          
           <div>{Total}</div> 
           <div>{gst}%</div>
           <div>${gtot}</div>
          </div>
      </div>
     
      {/* {props.CartDetails} */}
      {/* {props.cartItems} */}
    </div>
     <div className="payment  p-3">
     <span className="btn button-i ">Pay Pal</span>
     <span  className="btn button-i " >UPI</span>
     <span  className="btn button-inverse "  >Cash on Delivery</span>
    </div>
    {/* <div>
      {props.cartData.map((cart)=>(
        <div>
          <h3>{cart.title}</h3>
          <h3>{cart.price}</h3>
        </div>
      ))}
    </div> */}
  </div>
 );
}
