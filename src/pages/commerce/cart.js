import React from "react";
import './commerce.css';
import { Link } from "react-router-dom";
export default function cart(props) {
  // debugger
  // console.log(props.CartDetails);


  // console.log(window.location.href); 
  let count = 0;
  const gst=18;
  for (var i = 0; i < props.cartData.length; i++) {
    count = count + props.cartData[i].price;
  }
  //  console.log("Total :"+Math.round(count));
  const Total = Math.round(count);

  const gtot=Total+(Total* (gst/100));

  const toDelete = (id) => {
    // console.log(props.cartData)

    // const dat=props.cartData.find(it => it.id === id);
    
    // const index=props.cartData.indexof(dat);

    // props.cartData.splice(index,1);
    props.cartData.forEach(function(item, index, object) {
      if (item.id === id) {
        props.cartData.splice(index, 1);
        props.setCartData([...props.cartData])
        // console.log(item)
      }
    
      
    });
    // props.cartData.forEach(item => {
    //   if (item.id === id){

    //   }
    // });
  }

  // console.log(props.cartData);
  // if(props.cartData.length!==0)
  // {
  //   document.getElementById('cart-btn').style.color="blue";
  //   document.getElementById('cart-btn').innerText="add_shopping_cart";
  // }
  // else
  // {
  //   document.getElementById('cart-btn').style.color="black";
  //   document.getElementById('cart-btn').innerText="shopping_cart";
  // }

  // console.log(count);
  return (
    <div className="container cart-page bg-light">
    <div className="container  text-center bg-light border border-dark cart-block">


     { props.cartData.length===0 ? 
     <div className="p-5">
      <marquee direction="right"  >
      <span className="material-symbols-outlined">
        garden_cart
      </span>
      </marquee>
      <span  id="no-cart"> No Cart Items</span>
      <marquee direction="left">  
      <span className="material-symbols-outlined">
        garden_cart
      </span></marquee> </div> :  
     <div>
        <table className="cart-table table table-hover">
        <thead>
          <tr className="bg-dark text-white">
            <th>ITEM TITLE</th>
            <th>ITEM PRICE</th>
            <th>Quantity</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
      {
          props.cartData.map((data)=>(

          <tr id={props.cartData.id} key={props.cartData.id}>
            <td>{data.title}</td>
            <td>${data.price}</td>
            <td>1</td>
            <td >
              <button id={data.id}  className="btn btn-danger" onClick={()=>(toDelete(data.id))} >Remove</button>
            </td>
          </tr>
        ))
      }

      <tr className="bg-dark text-white hov">
        <td  colSpan='2'>Total {i} Items  Cost</td>
        <td colSpan='2'>${Total}.00</td>
      </tr>
      <tr className="bg-dark text-white">
        <td  colSpan='2'>GST %</td>
        <td colSpan='2'>{gst}%</td>
      </tr>
      <tr className="bg-dark text-white">
        <td  colSpan='2'>Total  Cost</td>
        <td colSpan='2'>${gtot}</td>
      </tr>
      </tbody>
        </table>
      <div className=" text-center p-3">
        <Link to="/checkout">
          <div className="btn button-i " onClick={()=>(props.setCheckoutData(gtot))}> Check Out</div>
        </Link>
      </div>
        
     </div>
     }
      {/* {props.CartDetails} */}
      {/* {props.cartItems} */}
     
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
