import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'
import { PLANS } from '../../../lib/plans'

export async function POST(req) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')

    // The pricing page posts which plan the visitor picked.
    const formData = await req.formData()
    const plan = PLANS[formData.get('plan')]
    if (!plan) {
      return NextResponse.json({ error: 'Unknown plan' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: plan.priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
      // Label this Checkout integration so its conversion can be measured independently
      integration_identifier: 'llama_premium_v1',
    })
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}
