// Write your JS code here
import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="home-body-container">
          <div className="text-container">
            <h1>Clothes That Get YOU Noticed</h1>
            <p className="description">
              Fashion is part of the daily air with a specific context, such as
              time, place and purpose. Example of these are clothing, footwear,
              lifestyle, accessories, makeup, hairstyle, and body posture.[1]
              The term implies a look defined by the fashion industry as that
              which is trending. Everything that is considered fashion is
              available and popularized by the fashion system (industry and
              media).
            </p>
            <button className="shop-now-btn" type="button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-img"
          />
        </div>
      </div>
    )
  }
}

export default Home
