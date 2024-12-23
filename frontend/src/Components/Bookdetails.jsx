import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import books from './Data/books'
import "./Bookdetails.css"; // Import the CSS file
import Footer from './Footer';
import Navbar from './Navbar';


function Bookdetails() {

 const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate(); // For navigation
  const book = books.find((b) => b.id === parseInt(id)); // Find the book by ID

  if (!book) {
    return <h2>Book not found!</h2>; // Handle case where book is not found
  }

  return (
    

        

    <>

      <Navbar/>
            
      <div className="book-details">
        <button onClick={() => navigate(-1)} className="back-button">← Back</button>
        <div className="book-details-container">
          <img src={book.image} alt={book.name} className="book-details-image" />
          <div className="book-details-info">
            <h1>{book.name}</h1>
            <p>{book.description}
              
            </p>
            <a href={book.link} target="_blank" rel="noopener noreferrer" className="link-button">                       
                       Get PDF
                    </a>
          </div>
        </div>
      </div>

    <Footer/>
        
  </>
        
    
  )
}

export default Bookdetails