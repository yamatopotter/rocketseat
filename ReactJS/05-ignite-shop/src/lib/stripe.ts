import Stripe from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

if (!stripeSecretKey) {
  throw new Error('Stripe secret key not provided.')
}
export const stripeLib = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'Ignite Shop',
  },
})
