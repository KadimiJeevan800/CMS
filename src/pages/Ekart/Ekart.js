import React, { useEffect, useState } from "react";
import "./Ekart.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from '../../components/loader';
import Sort from "./Sort";

// import data from './data.js';
export default function Ekart(props) {

  // const [prodata,setprodata]=useState([]);
  const [prod, setProd] = useState(["Welcome To E-Store"]);
  let cstyle = {
    background: "white",
    color: "black",
    alignSelf: "center",
  };
  
  // debugger
  // console.log(props.CartDetails);
  function addp(id)
  {
    props.setPid(id);  
    
  }
  function add(title,id,price)
  {
    // debugger
    let product = {
      "id":id,
      "title": title,
      "price": price
    }
    props.setCartData([...props.cartData, product])
    // document.getElementById('cart-btn').style.color="blue";
    document.getElementById("btn"+id).innerText="Added";
    document.getElementById("btn"+id).disabled = true;
  //  console.log(id);
  }

  const getProd = async () => {
    try {
      const resp = await axios("https://fakestoreapi.com/products");
      setProd(resp.data);
      // setprodata(resp.data)
      
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
    <div className="container bg-light text-center">

      {prod.length===1 ? "Loading .... " :<div className="bg-light mt-3">Your <Link to="/cart" className="btn button">Cart</Link></div>}
     
    { prod.length===1 ? <Loader/>:  
  
    <div className="Ekart container ">
      {/* Ekart Data */}
      
      {
      prod.map((prod) => (
        
          <ul className="prod"  key={prod.id} id={prod.id}>
            <li style={cstyle}>
              <b>Item :</b> {prod.title}
            </li>
            <li>
              <Link to={`/product`}>

                <img
                  src={prod.image}
                  alt="product-img"
                  className="border border-dark hov"
                  width="250px"
                  height="250px"
                  onClick={()=>(addp(prod.id))}
                />

              </Link>
            </li>
            <li className="price">
              <b>Price : $ </b>{prod.price}
            </li>
            <li>
              <button
                className="btn button"
                id={`btn${prod.id}`}
                // onClick={props.setCartItems(...props.cartItems, prod)}
                onClick={()=>add(prod.title,prod.id,prod.price)}
                // onClick={()=>add(prod.title,prod.id,prod.price)}  
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
    }
    </div>
    
  );
}
