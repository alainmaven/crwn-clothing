import React from "react";
import CartItem from "../cart-item/CartItem";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { selectCartItems} from '../../redux/cart/cart.selector';
import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
