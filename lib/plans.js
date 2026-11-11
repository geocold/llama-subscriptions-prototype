// Plans shown on the pricing page. The server only ever charges Price IDs listed here,
// so a visitor cannot tamper with the form to buy a different price.
export const PLANS = {
  monthly: {
    priceId: 'price_1Uac8YBHY6xmX64zVlmjynjb',
    name: 'Monthly',
    amount: '$9.99',
    interval: 'month',
    blurb: 'Flexible. Cancel anytime.',
  },
  yearly: {
    priceId: 'price_1UacA6BHY6xmX64zBPiSIrnQ',
    name: 'Yearly',
    amount: '$99',
    interval: 'year',
    blurb: 'Two months free compared to monthly.',
    badge: 'Save 17%',
  },
}

export const FEATURES = [
  'Unlimited AI trip planning, anywhere in the world',
  'Day by day itineraries tuned to your taste',
  'Live rebooking help when plans change',
  'Offline access to your trips',
]
