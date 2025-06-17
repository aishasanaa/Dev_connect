import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="landing-navbar">
        <div className="logo">DevConnect</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      {/* Header Section */}
      <header className="landing-header">
        <h1>Welcome to DevConnect</h1>
        <p>Where developers connect, showcase, and grow.</p>
        <Link to="/register" className="landing-cta">Get Started</Link>
      </header>

      {/* Features Section */}
      <main className="landing-main">
        <section className="feature">
          <h2>Create Your Profile</h2>
          <p>Add bio, skills, GitHub, and showcase your work.</p>
        </section>
        <section className="feature">
          <h2>Explore Developers</h2>
          <p>View other profiles and connect with fellow devs.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; 2025 DevConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
