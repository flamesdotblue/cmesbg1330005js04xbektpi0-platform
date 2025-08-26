import React from 'react'
import Spline from '@splinetool/react-spline'

function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="brand" href="#" aria-label="Flowgrid home">
          <span className="brand__logo" aria-hidden>⚙️</span>
          <span className="brand__text">Flowgrid</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#integrations">Integrations</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Docs</a>
        </nav>
        <div className="nav__cta">
          <a className="btn btn--ghost" href="#signin">Sign in</a>
          <a className="btn btn--primary" href="#get-started">Get started</a>
        </div>
        <button className="nav__menu" aria-label="Open menu" onClick={() => {
          const nav = document.querySelector('.nav')
          nav?.classList.toggle('open')
        }}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="badge">New • AI steps & observability</div>
          <h1>Automate workflows without the busywork</h1>
          <p className="lead">Design, run, and monitor mission‑critical processes. Connect your tools, orchestrate tasks, and ship faster with confidence.</p>
          <div className="cta">
            <a className="btn btn--primary btn--lg" href="#get-started">Start free</a>
            <a className="btn btn--ghost btn--lg" href="#demo">Book a demo</a>
          </div>
          <ul className="bullets" aria-label="Key benefits">
            <li>Drag‑and‑drop builder</li>
            <li>100+ integrations</li>
            <li>Realtime runs & alerts</li>
          </ul>
        </div>
        <div className="hero__canvas" aria-hidden>
          <div className="canvas__glass">
            <Spline scene="https://prod.spline.design/HJQS1eRlWNZg9AAH/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  )
}
