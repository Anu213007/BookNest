import React from 'react';
import './Bookstore.css';

import Footer from './Footer';
import Navbar from './Navbar';
import { useAuth } from '../store/Auth';
import { NavLink } from 'react-router-dom';

function Bookstore() {
  const { user, isLoggedin } = useAuth();

  return (
    <>
      <Navbar />

      <div className="main">
        <div className="main_tag">
          <h1>
            {isLoggedin ? (
              <>
                <span>Hello, {user.username}!</span><br />
              </>
            ) : null}
            WELCOME TO<br />
            <span>BOOK NEST</span>
          </h1>
          <p>
            BookNest is your one-stop destination for exploring, reviewing, and bookmarking the best books from a variety of genres. Whether you love fiction, non-fiction, or self-help, we provide a platform to dive into the world of books, share your thoughts, and find recommendations.
          </p>
          <a href="#" className="main_btn">Learn More</a>
        </div>

        <div className="main_img">
          <img src="image/table.png" alt="Table" />
        </div>
      </div>

      <div className="services">
        <div className="services_box">
          <div className="services_card">
            <i className="fa-solid fa-book-open"></i>
            <h3>Explore Books</h3>
            <p>Discover new and trending books across various genres. Read detailed reviews and ratings before picking your next read.</p>
          </div>

          <div className="services_card">
            <i className="fa-solid fa-comments"></i>
            <h3>Write Reviews</h3>
            <p>Share your thoughts and ratings on books you've read. Help others find their next great read through insightful reviews.</p>
          </div>

          <div className="services_card">
            <i className="fa-solid fa-bookmark"></i>
            <h3>Bookmark Books</h3>
            <p>Save your favorite books to your personal list and never lose track of your must-reads!</p>
          </div>

          <div className="services_card">
            <i className="fa-solid fa-users"></i>
            <h3>Community Engagement</h3>
            <p>Engage with fellow book lovers, share recommendations, and be part of an interactive reading community.</p>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="about_image">
          <img src="image/about.png" alt="About Us" />
        </div>
        <div className="about_tag">
          <h1>About Us</h1>
          <p>
            At BookNest, we aim to provide book lovers with a platform to connect, review, and share their reading experiences. Whether you're looking for your next great read or want to leave a review for others to discover, we have everything you need. Our community of passionate readers ensures that you never miss out on the best books in the market.
          </p>
          <a href="#" className="about_btn">Learn More</a>
        </div>
      </div>

      <div>
        <div className="additional-info">
          <p>Join thousands of readers who trust BookNest to enhance their reading journey. Explore, review, and bookmark your favorite books with us!</p>
          <div className="links">
            <NavLink to="/reviews">Read Reviews</NavLink>
            <NavLink to="/bookmarks">Your Bookmarks</NavLink>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Bookstore;


