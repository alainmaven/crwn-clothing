import React from "react";
import "./CheckoutPage.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartTotal,
  selectCartItems,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../checkout-item/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => 
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    )}
    <div className="total">
    <span>TOTAL: ${cartTotal}</span>
    </div>
    <div className="test-warning">
      *Test Credit Card
    <br/>
    4242 4242 4242 4242 --- Exp: 01/20 --- CW: 123
    </div>
    <StripeButton price={cartTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
