import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div>
          <p className="small-title">SMART UNIT CONVERTER</p>

          <h1>
            Convert <span>Anything</span>
            <br />
            Easily.
          </h1>

          <p className="hero-text">
            Convert length, weight, temperature, time, speed and more
            quickly with our simple unit converter.
          </p>

          <Link to="/converter">
            <button className="main-btn">Start Converting →</button>
          </Link>
        </div>

        <div className="converter-card">
          <div className="card-icon">🔄</div>
          <h2>Quick Conversion</h2>
          <p>100 Centimeters</p>
          <div className="arrow">↓</div>
          <h3>1 Meter</h3>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <div>📏</div>
          <h3>Length</h3>
          <p>m, km, cm, mm</p>
        </div>

        <div className="feature-card">
          <div>⚖️</div>
          <h3>Weight</h3>
          <p>kg, g, mg, lb</p>
        </div>

        <div className="feature-card">
          <div>🌡️</div>
          <h3>Temperature</h3>
          <p>°C, °F, K</p>
        </div>

        <div className="feature-card">
          <div>⏱️</div>
          <h3>Time</h3>
          <p>sec, min, hour</p>
        </div>
      </div>
    </div>
  );
}

export default Home;