import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-section about">
        <p>
          BookNest is your go-to platform to share and explore book reviews. Join our community of book lovers and discover the world of literature!
        </p>
          
      </div>
      <div className="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/reviews">Reviews</a>
            </li>
          
        </ul>
      </div>
      <div className="footer-section social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
        <FaFacebookF />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
        <FaLinkedinIn />
      </a>
        </div>
        <p>Contact us:booknest@gmail.com</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 BookNest. All Rights Reserved.</p>
    </div>
  </footer>
  
  )
}

export default Footer