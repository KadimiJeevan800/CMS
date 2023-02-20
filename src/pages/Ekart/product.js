import React, { useEffect, useState } from "react";
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
      // setTimeout(console.log(data.rating.rate),3000);
      console.log(resp.data.rating.rate);
      for(let i=0;i<5;i++)
      {
        document.getElementById("star").innerHTML=`<span className="fa fa-star checked"></span>`;
      }


      
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProd();
  }, []);
  // getProd();
  // console.log(data.rating.rate);
  return (
    <div className="container text-center">
    
      {
      
      data.length===0 ? 
      <Loader/>
       :
      <div className="product-item-details container mt-3 border border-dark">
       
        <div>
            <img src={data.image} alt="product-img " width="450px" height="400px"  />
                
        </div>
        <div className="text-start product-det">
            <div className="text-center"><b> Product Details </b></div>
            <div><b>Item Title : </b> {data.title}</div>
            <div><b>Price : </b> ${data.price}</div>
            <div><b>Description : </b>{data.description}</div>
            <div><b>Category : </b>{data.category}</div>
            <div>
              <b>Rating : </b>{data.rating.rate} &nbsp;
              {/* {for(let i=0;i<data.rating.rate)} */}
              <div id="star"></div>
              <span className="fa fa-star checked"></span> 
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>  
              <span className="fa fa-star"></span>
            </div>
            <div><b>Stock (Available) : </b>{data.rating.count}</div>
            <div><b>Review : </b> <br/>
            <textarea rows="4" cols="50">

            </textarea>
            </div>
        </div>
      </div>
      
      }
    </div>
  );
}
