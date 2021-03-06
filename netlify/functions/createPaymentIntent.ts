require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event: any) => {
  try {
    const { amount } = JSON.parse(event.body)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'usd',
      payment_method_types: ['card'],
    })
    return {
      statusCode: 200,
      body: JSON.stringify({
        paymentIntent,
      }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
      }),
    }
  }
}
