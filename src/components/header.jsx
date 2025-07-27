import { useState } from "react";
import "./header.css";
import logo from "../assets/images/logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Logo */}
      <div className="first-header">
        <img className="logo" src={logo} alt="logo" />
      </div>

      {/* Navigation links - toggle display */}
      <nav
        className="nav-links"
        style={{ display: menuOpen ? "flex" : "none" }}
      >
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </nav>

      <div className="header-buttons">
        <button className="login-button">Login</button>
        <button className="signUp-button">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
