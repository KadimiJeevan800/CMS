import React, { useState } from "react";
import axios from "axios";
import Loader from '../../components/loader';

// console.log(props.cartItems);

export default function Product(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);
  const getProd = async () => {
    try {
      const resp = await axios(
        `https://fakestoreapi.com/products/${props.pid}`
      );
      setData(resp.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  getProd();
  return (
    <div className="container text-center">
    
      {
      
      data.length===0 ?
      <Loader/> :
      <div className="product-item-details">
       
        <div>
            <img src={data.image} alt="product-image " width="450px" height="400px"  />
                
        </div>
        <div className="text-start product-det">
            <div className="text-center"><b> Product Details </b></div>
            <div><b>Item Title : </b> {data.title}</div>
            <div><b>Price : </b>{data.price}</div>
            <div><b>Description : </b>{data.description}</div>
            <div><b>Category : </b>{data.category}</div>
            <div><b>Rating : </b>{data.rating.rate}</div>
            <div><b>Stock (Available) : </b>{data.rating.count}</div>
            <div><b>Review : </b> <br/>
            <textarea rows="4" cols="60">

            </textarea>
            </div>
        </div>
      </div>
      
      }
    </div>
  );
}
