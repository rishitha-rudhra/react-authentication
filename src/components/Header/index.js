// Write your JS code here

import './index.css'

const Header = () => (
  <ul className="header">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="website-logo"
    />
    <li className="nav-item">Home</li>
    <li className="nav-item">Products</li>
    <li className="nav-item">Cart</li>
    <button className="logout-btn" type="button">
      Logout
    </button>
  </ul>
)

export default Header
