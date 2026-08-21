import Button from '../components/Button'
import { useState } from 'react'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background" />

      <div className="container hero-content">
        <div className="hero-top">
          <span>01 / PREMIUM AUTOMOTIVE STUDIO</span>
          <span>SHYMKENT / KAZAKHSTAN</span>
        </div>

        <div className="hero-main">
          <span className="hero-label">
            DETAILING. PROTECTION. PERFECTION.
          </span>

          <h1>
            YOUR CAR.
            <br />
            <em>OUR STANDARD.</em>
          </h1>

          <div className="hero-bottom">
            <p>
              Профессиональный детейлинг автомобилей
              с вниманием к каждой детали.
            </p>

            <Button>
              Записаться на детейлинг
            </Button>
          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  )
}

export default Hero