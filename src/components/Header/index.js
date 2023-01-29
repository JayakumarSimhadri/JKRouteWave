import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="total ">
    <div className="first">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1>Wave</h1>
    </div>
    <div className="first">
      <h1>
        <Link to="/">Home</Link>
      </h1>

      <h1>
        <Link to="/about">About</Link>
      </h1>

      <h1>
        <Link to="/contact">Contact</Link>
      </h1>
    </div>
  </nav>
)

export default Header
