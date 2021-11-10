import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {

  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JuLF8FMT5QJtvTC7NaiNHuTpnKYdlsO3OUILMd0xzDb7ACY8PC8os0rcXSxWcz8ei86n1SEh3XKm7gH3E0rt7Yd00kkyt2fym';
  
  const onToken = token =>{
    console.log(token);
    alert("Payment Successful!")
  }

  return(
    <StripeCheckout 
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripekey={publishableKey}
    />
  );
}

export default StripeButton;