import React, { useEffect, useState } from "react";
import "./Ekart.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import data from './data.js';
export default function Ekart(props) {
  const [prod, setProd] = useState(["Welcome To E-Store"]);
  let cstyle = {
    background: "white",
    color: "black",
    alignSelf: "center",
  };
  
  // debugger
  // console.log(props.CartDetails);

  function add(title,id,price)
  {
    // debugger
    props.setCartItems([...props.cartItems,title]);
    props.setCartDetails([...props.CartDetails,price])
    // props.setCartDetails([...props.CartDetails,title,price]);
    // props.setCartDetails([...props.CartDetails.CartTitle,title]);
    // props.setCartDetails([...props.CartDetails.CartPrice,price]);
    // console.log(props.CartDetails);

    // document.getElementById('cart-btn').style.backgroundColor="blue";
    document.getElementById('cart-btn').style.color="blue";
    document.getElementById('cart-btn').innerText="add_shopping_cart";
    document.getElementById("btn"+id).style.backgroundColor="red";
    document.getElementById("btn"+id).classList.add="disabled";
  //  console.log(id);
  }

  const getProd = async () => {
    try {
      const resp = await axios("https://fakestoreapi.com/products");
      setProd(resp.data);
      
    } catch (error) {
      console.log(error.message)
    }
    // console.log(await resp.json());
  };
  // console.log(props.cartItems);
  useEffect(() => {
    getProd();
  }, []);

  return (
    <div className="Ekart container text-center">
      {/* Ekart Data */}
    
       
      {
    
      prod.map((prod) => (
        
          <ul className="prod "  key={prod.id} id={prod.id}>
            <li style={cstyle}>
              <b>Item :</b> {prod.title}
            </li>
            <li>
              <Link to={`product/${prod.id}`}>

                <img
                  src={prod.image}
                  alt="product-image"
                  className="border border-dark hov"
                  width="100px"
                  height="100px"
                />

              </Link>
            </li>
            <li>
              <b>Description : </b>
            </li>
            <li>
              
              {prod.description}...
              {/* {console.log((prod.description.slice(0,200)))} */}
            </li>
            <li>
              <b>Price :</b>${prod.price}
            </li>
            {/* <li>{prod.rating.rate }</li> */}
            {/* <li>{prod.rating.rate <3 ? "Low " : "HIgher"}</li> */}
            <li>
              <button
                className="btn btn-success"
                id={`btn${prod.id}`}
                // onClick={props.setCartItems(...props.cartItems, prod)}
           
                onClick={()=>add(prod.title,prod.id,prod.price)}
                // onClick={()=>add(prod.title,prod.id,prod.price)}

                // onClick={()=>add(prod.title)}  
              >
                Add to Cart +
              </button>
            </li>
          </ul>
        
      ))}
   
      <span className="text-center text-white">
        <span className="material-symbols-outlined">local_shipping</span>
        For any items mail us &copy; jeevan.kadimi@innovasolutions.in
        <span className="material-symbols-outlined">local_shipping</span>
      </span>
      <span className="text-center text-white">
        <span className="material-symbols-outlined">storefront</span>
        Happy Shopping
        <span className="material-symbols-outlined">storefront</span>
      </span>
    </div>
  );
}
