// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css"; // style in separate file or reuse LandingPage.css

const Navbar = () => {
  return (
    <nav className="landing-navbar">
      <div className="logo">DevConnect</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
