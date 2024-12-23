import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/Auth';
import './profile.css'
import Navbar from './Navbar';
import Footer from './Footer';

function Profile() {
  const { user } = useAuth(); // Retrieve user details from the auth context
  const [reviewCount, setReviewCount] = useState(null); // State to store review count
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch the review count for the logged-in user
    const fetchReviewCount = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/reviews/count', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch review count');
        }

        const data = await response.json();
        setReviewCount(data.reviewCount); // Update state with the review count
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReviewCount();
  }, []);

  return (
    <>
    
    <Navbar/>

    <div className='profile-container'>
      <div className="profile">
        <h1>Profile</h1>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>
            Reviewed{' '}
            {loading
                ? 'Loading...' // Show loading text while fetching data
                : error
                ? `Error: ${error}` // Display error if fetching fails
                : `${reviewCount} ${reviewCount === 1 ? 'book' : 'books'}`}
        </p>
      </div>
    </div>

    <Footer/>
    
    </>
  );
}

export default Profile;
