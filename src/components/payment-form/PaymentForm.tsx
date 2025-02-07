import { FormEvent, useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { selectCartTotal } from '../../store/features/cart/cart.selectors'
import { selectUserInfo } from '../../store/features/auth/auth.selectors'

import CustomButton from '../custom-button/CustomButton'
import './PaymentForm.sass'
import { CreatePaymentMethodCardData } from '@stripe/stripe-js'
import { useAppSelector } from '../../store/hooks'

function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()
  const amount = useAppSelector(selectCartTotal)
  const currentUser = useAppSelector(selectUserInfo)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const [paymentMessage, setPaymentMessage] = useState<string | null>(null)

  const paymentHandler = async (e: FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setIsProcessingPayment(true)
    setPaymentMessage(null)

    const response = await fetch('/.netlify/functions/createPaymentIntent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json())

    const clientSecret = response.paymentIntent?.client_secret

    if (!clientSecret) {
      setPaymentMessage('Failed to process payment. Please try again.')
      setIsProcessingPayment(false)
      return
    }

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.name : 'Guest User',
        },
      } as CreatePaymentMethodCardData,
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      setPaymentMessage(paymentResult.error.message ?? null)
    } else if (paymentResult.paymentIntent.status === 'succeeded') {
      setPaymentMessage('Payment Successful!')
    } else {
      setPaymentMessage('Unexpected payment status. Please check your transaction.')
    }
  }

  return (
    <div className="payment-form-container">
      <form onSubmit={paymentHandler} className="form-container">
        <h2>Credit Card Payment</h2>

        <label htmlFor="card-element" className="visually-hidden">
          Enter your credit card details
        </label>
        <CardElement id="card-element" />

        <CustomButton
          style={{ margin: 'auto', marginTop: '30px' }}
          disabled={isProcessingPayment}
          aria-disabled={isProcessingPayment}
        >
          {isProcessingPayment ? 'Processing...' : 'Pay Now'}
        </CustomButton>

        {paymentMessage && (
          <p role="alert" className={`payment-message ${paymentMessage.includes('Failed') ? 'error' : 'success'}`}>
            {paymentMessage}
          </p>
        )}
      </form>
    </div>
  )
}

export default PaymentForm
