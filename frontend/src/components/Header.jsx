import { Link, NavLink } from "react-router-dom"
import logo from '../assets/logo.jpg'
import './Header.css'
import NavBar from './Navbar'

const Header = () => {
    return (
        <header className="header">
          <div className="logo-container">
            <a href="/" style={{ display: 'inline-block', marginLeft: '20px' }}>
              <img 
                src={logo} 
                alt="Game Shop Logo" 
                style={{
                  width: '150px', 
                  height: 'auto',  
                  borderRadius: '10px', 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
            </a>
          </div>

          <NavBar/>
    
          <nav>
            <ul className="nav-links">
              <li><NavLink to={'cart'}>Cart</NavLink></li>
              <li><NavLink to={'signup'}>Signup</NavLink></li>
              <li><NavLink to={'checkout'}>Checkout</NavLink></li>
            </ul>
          </nav>
        </header>
      );
}

export default Header