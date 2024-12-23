import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Navbar from './Navbar';
import { useAuth } from '../store/Auth';
import './Bookmark.css'

function Bookmarkpage() {
  const [bookmarks, setBookmarks] = useState([]);
  const { user, isLoggedin } = useAuth();

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/bookmarks', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBookmarks(response.data);
      } 
      catch (error) 
      {
        console.error('Error fetching bookmarks:', error.response?.data || error.message);
      }
    };

    fetchBookmarks();
  }, []);

  // Delete bookmark function
  const handleDelete = async (bookmarkId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/bookmarks/${bookmarkId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Update state to remove the deleted bookmark
      setBookmarks((prevBookmarks) =>
        prevBookmarks.filter((bookmark) => bookmark._id !== bookmarkId)
      );
    } catch (error) {
      console.error('Error deleting bookmark:', error.response?.data || error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bookmark-page">
        {isLoggedin ? (
          <>
            <h2>
              <span className="username">{user.username}</span>, Your bookmarked books
            </h2>
          </>
        ) : (
          <>
            <h2>Login to see bookmarks</h2>
          </>
        )}
        <div className="bookmark-container">
          {bookmarks.map((bookmark) => (
            <div key={bookmark._id} className="book-card">
              <div className="book-info">
                <h2>{bookmark.name}</h2>
                <p>{bookmark.description}</p>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(bookmark._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Bookmarkpage;
