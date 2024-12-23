import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/Auth';

function Navbar() {


  const { isLoggedin, LogoutUser , user} = useAuth(); 


  const handleLogout = () => {
      LogoutUser();
      
    };
  


  return (
    <>
    
     <div className="nav">


     <div className="logo">
      <img src="/image/logo.png" alt="Logo" />
        <h1>BookNest</h1>
    </div>

    <ul>
      <li> 
        <NavLink to='/'>
         Home  
        </NavLink>
        </li>
      <li> 
      <NavLink to='/booklist'>
         Booklist  
        </NavLink>
        </li>

        <li> 
      <NavLink to='/reviews'>
        Review 
      </NavLink>
        </li>

        <li> 
      <NavLink to='/bookmarks'>
       Bookmarks
      </NavLink>
        </li>
     
    </ul>

    <div className="social_icon">
      <i className="fa-solid fa-magnifying-glass"></i>
      <i className="fa-solid fa-heart"></i>
    </div>


    {isLoggedin ? (
          <>
          <NavLink className='log-btns' to="/logout" onClick={handleLogout}>
            Logout
          </NavLink>

          <NavLink className='profile-btns'  to='/profile'>
           Profile
          </NavLink>
          
          
          </>

          
        ) : (
            <NavLink to='/login'>
            <button className='log-btns'>
                 Login
             </button>
            </NavLink>
        )}




     </div>
    
    </>
  )
}

export default Navbar