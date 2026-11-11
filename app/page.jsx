import { PLANS, FEATURES } from '../lib/plans'

export default async function PricingPage({ searchParams }) {
  const { canceled } = await searchParams

  return (
    <main className="page">
      <div className="test-banner">
        Test mode demo. Pay with card <strong>4242 4242 4242 4242</strong>, any
        future date, any CVC (card verification code). No real money moves.
      </div>

      <header className="brand">
        <span className="logo" aria-hidden="true">🦙</span>
        <span className="brand-name">Llama Inc.</span>
      </header>

      <section className="hero">
        <h1>Plan trips like you have a local friend everywhere.</h1>
        <p>
          Llama is your AI travel assistant. Go Premium to unlock unlimited
          planning for every trip, in every country.
        </p>
      </section>

      {canceled && (
        <div className="notice">
          Checkout canceled. No charge was made. Pick a plan whenever you are
          ready.
        </div>
      )}

      <section className="plans">
        {Object.entries(PLANS).map(([key, plan]) => (
          <form
            key={key}
            action="/api/checkout_sessions"
            method="POST"
            className={`card ${plan.badge ? 'featured' : ''}`}
          >
            <input type="hidden" name="plan" value={key} />
            <div className="card-head">
              <h2>{plan.name}</h2>
              {plan.badge && <span className="badge">{plan.badge}</span>}
            </div>
            <p className="price">
              {plan.amount}
              <span className="interval"> / {plan.interval}</span>
            </p>
            <p className="blurb">{plan.blurb}</p>
            <button type="submit" role="link">
              Start {plan.name.toLowerCase()} plan
            </button>
          </form>
        ))}
      </section>

      <section className="features">
        <h3>Everything in Premium</h3>
        <ul>
          {FEATURES.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        Payments securely processed by Stripe Checkout. Prices in USD; taxes
        calculated at checkout.
      </footer>
    </main>
  )
}
