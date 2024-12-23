// // export default Booklist;



// // import React, { useState } from 'react';
// // import books from './Data/books';
// // import "./Booklist.css"; // Import the CSS file
// // import { Link } from "react-router-dom";
// // import Footer from './Footer';
// // import Navbar from './Navbar';
// // import axios from 'axios';
// //  // Ensure this is correctly imported in Booklist or wherever you use the Navber component.import Navbar from './Navbar';


// // function Booklist() {
// //   // State for search query
// //   const [searchQuery, setSearchQuery] = useState('');

// //   // Filter books based on search query
// //   const filteredBooks = books.filter((book) =>
// //     book.name.toLowerCase().includes(searchQuery.toLowerCase())
// //   );


// //   const handleBookmark = async (book) => {
// //     try {
// //       const token = localStorage.getItem('token'); // Get the user's token
// //       const response = await axios.post(
// //         'http://localhost:5000/api/bookmarks',
// //         { 
// //           bookId: book.id, 
// //           name: book.name, 
// //           description: book.description, 
// //           image: book.image 
// //         },
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         }
// //       );
// //       alert(response.data.message);
// //     } catch (error) {
// //       console.error('Error bookmarking book:', error.response?.data || error.message);
// //       alert('Failed to bookmark book.');
// //     }
// //   };

// //   return (
// //     <div>

// //       <Navbar/>
     
// //       <header>
// //         <h1>Book Collection</h1>
// //         {/* Search Input Field */}
// //         <input
// //           type="text"
// //           placeholder="Search by book name..."
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
// //           className="search-input"
// //         />
// //       </header>
      
// //       <div className="book-container">
// //         {/* Render filtered books */}
// //         {filteredBooks.map((book) => (
// //           <div key={book.id} className="book-card">
// //             <img src={book.image} alt={book.name} className="book-image" />
// //             <div className="book-info">
// //               <h2>{book.name}</h2>
// //               <p>{book.description.substring(0, 100)}...</p>
// //               {/* Link to Single Book Page */}
// //               <Link to={`/book/${book.id}`} className="read-more">
// //                 View Details
// //               </Link>
// //               <button onClick={() => handleBookmark(book)} className="bookmark-button">
// //                 Bookmark
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
      
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default Booklist;


// import React, { useState } from 'react';
// import books from './Data/books';
// import "./Booklist.css"; // Import the CSS file
// import { Link } from "react-router-dom";
// import Footer from './Footer';
// import Navbar from './Navbar';
// import axios from 'axios';

// function Booklist() {
//   // State for search query
//   const [searchQuery, setSearchQuery] = useState('');
//   // State for selected type
//   const [selectedType, setSelectedType] = useState('');

//   // Filter books based on search query and selected type
//   const filteredBooks = books.filter((book) => {
//     const matchesSearch = book.name.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesType = selectedType ? book.type === selectedType : true;
//     return matchesSearch && matchesType;
//   });

//   const handleBookmark = async (book) => {
//     try {
//       const token = localStorage.getItem('token'); // Get the user's token
//       const response = await axios.post(
//         'http://localhost:5000/api/bookmarks',
//         { 
//           bookId: book.id, 
//           name: book.name, 
//           description: book.description, 
//           image: book.image 
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert(response.data.message);
//     } catch (error) {
//       console.error('Error bookmarking book:', error.response?.data || error.message);
//       alert('Failed to bookmark book.');
//     }
//   };

//   return (
//     <div>
//       <Navbar />
      
//       <header>
//         <h1>Book Collection</h1>
//         {/* Search Input Field */}
//         <input
//           type="text"
//           placeholder="Search by book name..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
//           className="search-input"
//         />

//         {/* Filter by Type Selector */}
//         <select
//           value={selectedType}
//           onChange={(e) => setSelectedType(e.target.value)}
//           className="type-selector"
//         >
//           <option value="">All Types</option>
//           <option value="drama">Drama</option>
//           <option value="romance">Romance</option>
//           <option value="fantasy">Fantasy</option>
//           <option value="comedy">Comedy</option>
//         </select>
//       </header>
      
//       <div className="book-container">
//         {/* Render filtered books */}
//         {filteredBooks.map((book) => (
//           <div key={book.id} className="book-card">
//             <img src={book.image} alt={book.name} className="book-image" />
//             <div className="book-info">
//               <h2>{book.name}</h2>
//               <p>{book.description.substring(0, 100)}...</p>
//               {/* Link to Single Book Page */}
//               <Link to={`/book/${book.id}`} className="read-more">
//                 View Details
//               </Link>
//               <button onClick={() => handleBookmark(book)} className="bookmark-button">
//                 Bookmark
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <Footer />
//     </div>
//   );
// }

// export default Booklist;


import React, { useState } from "react";
import books from "./Data/books";
import "./Booklist.css"; // Import the CSS file
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";

function Booklist() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // State to control modal visibility and selected book
  const [selectedBook, setSelectedBook] = useState(null);

  // Filter books based on search query
  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookmark = async (book) => {
    try {
      const token = localStorage.getItem("token"); // Get the user's token
      const response = await axios.post(
        "http://localhost:5000/api/bookmarks",
        {
          bookId: book.id,
          name: book.name,
          description: book.description,
          image: book.image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,

          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error bookmarking book:", error.response?.data || error.message);
      alert("Failed to bookmark book.");
    }
  };

  return (
    <div>
      <Navbar />
      <header>
        <h1>Book Collection</h1>
        {/* Search Input Field */}
        <input
          type="text"
          placeholder="Search by book name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          className="search-input"
        />
      </header>

      <div className="book-container">
        {/* Render filtered books */}
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.name} className="book-image" />
            <div className="book-info">
              <h2>{book.name}</h2>
              <p>{book.description.substring(0, 100)}...</p>
              <button onClick={() => setSelectedBook(book)} className="read-more">
                View Details
              </button>
              <button onClick={() => handleBookmark(book)} className="bookmark-button">
                Bookmark
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Book Details */}
      {selectedBook && (
        <div className="book-modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedBook(null)}>
              &times;
            </span>


            <div className="book-content">
              <div className="book-modal-img">
              <img src={selectedBook.image} alt={selectedBook.name} className="modal-image" />
              </div>
              <div className="book-modal-texts">
              <h2>{selectedBook.name}</h2>
              <p>{selectedBook.description}</p>
              <a
                href={selectedBook.link}
                target="_blank"
                rel="noopener noreferrer"
                className="details-link"
              >
                Read Full Book
              </a>
              </div>
            </div>
           
            {/* <img src={selectedBook.image} alt={selectedBook.name} className="modal-image" />
            <h2>{selectedBook.name}</h2>
            <p>{selectedBook.description}</p>
            <a
              href={selectedBook.link}
              target="_blank"
              rel="noopener noreferrer"
              className="details-link"
            >
              Read Full Book
            </a> */}






          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Booklist;