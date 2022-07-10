import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { selectCartTotal } from '../../store/features/cart/cart.selectors';
import { selectUserInfo } from '../../store/features/auth/auth.selectors';

import CustomButton from '../custom-button/CustomButton';
import './PaymentForm.scss';

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectUserInfo);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch('/.netlify/functions/createPaymentIntent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Yihua Zhang',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };

  return (
    <div className="payment-form-container">
      <form onSubmit={paymentHandler} className="form-container">
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <CustomButton
          style={{ margin: 'auto', marginTop: '30px' }}
          disabled={isProcessingPayment}
        >
          {isProcessingPayment ? 'Processing...' : 'Pay Now'}
        </CustomButton>
      </form>
    </div>
  );
}

export default PaymentForm;
