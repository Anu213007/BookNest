import React from "react";
import "./HomePage.css"; // Import the CSS file

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to BookNest</h1>
        <p>Your one-stop platform to read, review, and discover amazing books.</p>
        <button className="cta-button">Explore Now</button>
      </section>

      {/* Card Section */}
      <section className="cards">
        <h2>Our Features</h2>
        <div className="card-container">
          {/* Card 1 */}
          <div className="card">
            <h3>Track Your Reading</h3>
            <p>Keep a log of your favorite books and monitor your progress in real-time.</p>
          </div>
          {/* Card 2 */}
          <div className="card">
            <h3>Personalized Recommendations</h3>
            <p>Discover new books tailored to your preferences using AI-powered suggestions.</p>
          </div>
          {/* Card 3 */}
          <div className="card">
            <h3>Community Engagement</h3>
            <p>Connect with other book lovers, share reviews, and join lively discussions.</p>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <footer className="additional-info">
        <p>Join thousands of readers who trust BookNest to enhance their reading journey.</p>
        <div className="links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
