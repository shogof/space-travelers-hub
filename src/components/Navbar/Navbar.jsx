import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
      event.preventDefault();
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src="/Logo/loogoo.png" className="logo" alt="header logo" />
          <h1>Space Travelers Hub</h1>
        </div>
        <div className="nav-right">
          <button
            type="button"
            className="hamburger"
            onClick={toggleMenu}
            onKeyPress={handleKeyPress}
            aria-label="Toggle menu"
          >
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </button>
          <nav className={`nav-ul ${isMenuOpen ? 'active' : ''}`}>
            <button type="button" className="close-button" onClick={closeMenu} aria-label="Close menu">
              &times;
            </button>
            <ul className="links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => `navlink ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  Rockets
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="missions"
                  className={({ isActive }) => `navlink ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  Missions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="dragon"
                  className={({ isActive }) => `navlink ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  Dragon
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myprofile"
                  className={({ isActive }) => `navlink ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
