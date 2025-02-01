import React,{useState} from "react";
import "../Styles/Cart.css";

function Cart() {

    const [LocalCart, setLocalCart] = useState(localStorage.getItem('Local_Cart'));
    console.log(LocalCart[0]);
  return (
    <div className="cart">

      <div className="cart-section">
        <div className="cart-header">
          <div className="cart-header-left">
            <div className="cart-section-title">Travel Cart</div>
            <div className="cart-section-Items-count">
              You have 2 Trips in your cart
            </div>
          </div>
          <div className="cart-header-right">sort by:<span>Name</span></div>
        </div>
        <div className="Cart-section-items">
            <div className="cart-item">item 1</div>
            <div className="cart-item">item 1</div>
            {
              LocalCart
            }
        </div>
      </div>

      <div className="cart-price-summery">
      <div className="cart-price-summery-header">
          <div className="cart-price-summery-header-left">
            <div className="cart-price-summery-title">Order Summery </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
