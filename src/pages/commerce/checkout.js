import React from "react";

import "./commerce.css";

export default function checkout(props) {
  // Get the modal

  // When the user clicks on the button, open the modal
  // btn.onclick = function() {
  //   modal.style.display = "block";
  // }
  setTimeout(checkout_click, 2000);
  function checkout_click() {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //   modal.style.display = "none";
    // }
    span.addEventListener("click", () => {
      modal.style.display = "none";
    });
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  return (
    <div className="checkout-page container text-center mt-5">
      <div className="row">
        <div className="col-md-8  ">
          <h5>Confirm order and pay</h5>
          <h6>
            please make the payment, after that you can enjoy all the features
            and benefits.
          </h6>
          <div className="bg-light  card">
            <div className="payment-details">
              <div className="form p-3">
                <h5>Payment Details :</h5>
                <form>
                  <div>
                    <input
                      type="text"
                      placeholder="Name of the Card"
                      required
                    />
                  </div>
                  <div className="p-3">
                    <input placeholder="Card Number" className="m-1" />
                    <input placeholder="Expiry Date" className="m-1" />
                    <input placeholder="CVV" className="m-1" />
                  </div>
                </form>
              </div>
            </div>
            <div className="billing-address ">
              <h5>Billing Address</h5>
              <div className="form p-3">
                <form>
                  <div>
                    <input placeholder="Street Address" className="m-3" />
                    <input placeholder="City" className="m-3" />
                  </div>
                  <div>
                    <input placeholder="State" className="m-3" />
                    <input placeholder="Zip Code" className="m-3" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4  mt-5 mt-5">
          <div className="bg-success text-white p-3">
            <span>You have to pay</span> <br />
            <span className="checkout-price-data bg-dark border border-warning  text-white p-1">
              $<b>{props.checkoutData}</b>
            </span>
            <br />
            <span>
              Enjoy all the features and perk after you complete the payment
            </span>
            <br />
            <span className="hov">Know all the features</span>
            <br />
            <span>
              100% Guaranteed support and update for the next 5 years.
            </span>{" "}
            <br />
            <span>
              <button className="btn button border-dark" id="myBtn">
                Pay Now
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* {props.checkoutData} */}
      {/* <div className='payment flexer'>
        <div className="btn button-i ">Pay Pal</div>
        <div  className="btn button-i " >UPI</div>
        <div  className="btn button-inverse "  >Cash on Delivery</div>
        <div className="btn button-i text-start">
            <span className="material-symbols-outlined ">
                credit_card
            </span>
        </div>
      </div> */}

      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Order Placed ....!</p>
        </div>
      </div>
    </div>
  );
}
