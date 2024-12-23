import React, { useState, useEffect } from 'react';
import './Review.css';
import { FaPen } from "react-icons/fa";
import { useAuth } from '../store/Auth';
import axios from 'axios';
import ConfirmModal from './ConfirmModal';
import Navbar from './Navbar';
import Footer from './Footer';

function Review() {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [reviewHeading, setReviewHeading] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');  // For search
  const { user, isLoggedin } = useAuth();

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleHeadingChange = (event) => {
    setReviewHeading(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);  // Update search term
  };

  const handleReviewSubmit = async (event) => {
    event.preventDefault();

    if (!isLoggedin) {
      setShouldRedirect(true);
      return;
    }

    // Redirect to login page if not logged in
    if (shouldRedirect) {
      window.location.href = '/login';
      return null;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found. User is not authenticated.');
      return;
    }

    // If in edit mode, update the review
    if (editMode && editId !== null) {
      try {
        await axios.put(
          `http://localhost:5000/api/reviews/${editId}`,
          {
            heading: reviewHeading,
            content: reviewText,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const updatedReviews = reviews.map((review) => {
          if (review.id === editId) {
            return {
              ...review,
              heading: reviewHeading,
              content: reviewText,
            };
          }
          return review;
        });
        setReviews(updatedReviews);
        setEditMode(false);
        setEditId(null);
      } catch (error) {
        console.error('Error updating review:', error);
      }
    } else {
      // If not in edit mode, create a new review
      if (reviewText.trim() !== '' && reviewHeading.trim() !== '') {
        try {
          const response = await axios.post(
            'http://localhost:5000/api/reviews',
            {
              heading: reviewHeading,
              content: reviewText,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setReviews([...reviews, response.data]);
        } catch (error) {
          console.error('Error creating review:', error);
        }
      }
    }

    setReviewText('');
    setReviewHeading('');
  };

  const requestDeleteReview = (id) => {
    setDeleteId(id);
    setShowConfirmModal(true);
  };

  const confirmDeleteReview = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      console.error('No token found. User is not authenticated.');
      return;
    }
    
    try {
      await axios.delete(`http://localhost:5000/api/reviews/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    
      const updatedReviews = reviews.filter((review) => review._id !== deleteId);
      setReviews(updatedReviews);
      setShowConfirmModal(false);
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const cancelDeleteReview = () => {
    setShowConfirmModal(false);
  };

  const editReview = (id, heading, content) => {
    setEditMode(true);
    setEditId(id);
    setReviewHeading(heading);
    setReviewText(content);
  };

  // Filter reviews based on search term
  const filteredReviews = reviews.filter((review) =>
    review.heading.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

     <Navbar/>


      <div className='reviews'>
         

          <div className='search-container'>
            <h2>


            <span className='username'>
            {isLoggedin  ? (
              <>
                {user.username}, 
              </>
            ) : null}
           
          </span>

               Search reviews by book name
               </h2>
          </div>
        {/* Search bar for filtering reviews */}
        <div className="search-container">
       
          <input
            type="text"
            placeholder="Search reviews..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className='newreview-container'>
          {filteredReviews.map((review) => (
            <div key={review._id} className="review-card">
              <div className="post">
                <p className="poster"><strong>Reviewed by:</strong> {review.user.username}</p>
              </div>
              <h3>{review.heading}</h3>
              <p>{review.content}</p>
              {isLoggedin && user.username === review.user.username && (
                <div>
                  <button className='edit' onClick={() => editReview(review._id, review.heading, review.content)}>Edit</button>
                  <button className='delete' onClick={() => requestDeleteReview(review._id)}>Delete</button>
                </div>
              )}
            </div>
          ))}
        </div>

        <h4 className='write'>Write your reviews</h4>

        <div className='review-area'>
          <form onSubmit={handleReviewSubmit}>
            <input
              type='text'
              value={reviewHeading}
              onChange={handleHeadingChange}
              placeholder='Enter book name...'
            />
            <textarea
              value={reviewText}
              onChange={handleReviewChange}
              placeholder='Write your review...'
            />
            {!isLoggedin && (
              <button className='redirect' onClick={() => { window.location.href = '/login'; }} >
                Post
              </button>
            )}
            {isLoggedin && (
              <button className='submit' type='submit'>{editMode ? 'Save' : 'Post'}</button>
            )}
          </form>
        </div>

        <ConfirmModal
          show={showConfirmModal}
          message="Are you sure you want to delete this review?"
          onConfirm={confirmDeleteReview}
          onCancel={cancelDeleteReview}
        />
      </div>

      <Footer/>      

    </>
  );
}

export default Review;
