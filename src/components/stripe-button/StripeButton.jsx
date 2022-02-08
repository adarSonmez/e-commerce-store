import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {
  // The value of 1 dollar is 100 in Stripe
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KQoc4FsRdcVlUBDNAW3MfQyC6kl1gRrRT3L8fL7xdDzWcR3bxixS5GWPXn6msHF4aWCOaFqT3b1pwuMugGRGCgu0060FHy4R3';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Adar Sönmez Clothing Ltd."
      billingAddress
      allowRememberMe
      description={`Your total is $${price}`}
      amount={priceForStripe}
      bitcoin
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
