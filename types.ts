import Stripe from 'stripe'

export interface UserDetails {
  id: string
  first_name: string
  last_name: string
  full_name?: string
  avatar_url?: string
  billing_address?: Stripe.billing_address
  payment_method?: Stripe.payment_method[Stripe.payment_method.type]
}

export interface Product {
  id: string
  active?: boolean
  name?: string
  description?: string
  image?: string
  metadata?: Stripe.metadata
}

export interface Price {
  id: string
  product_id?: string
  active?: boolean
  description?: string
  unit_amount?: string
  currency?: string
  type?: Stripe.Price.type
  interval?: Stripe.Price.recurring.interval
  interval_count?: number
  trial_period_days?: number | null
  metadata?: Stripe.metadata
  products?: Product
}

export interface Subscription {
  id: string
  user_id: string
  status?: Stripe.Subscription.status
  metadata?: Stripe.metadata
  price_id?: string
  quantity?: string
  cancel_at_period_end?: boolean
  created: string
  current_period_start: string
  current_period_end: string
  ended_at?: string
  cancel_at?: string
  canceled_at?: string
  trial_start?: string
  trial_end?: string
  prices?: Price
}
