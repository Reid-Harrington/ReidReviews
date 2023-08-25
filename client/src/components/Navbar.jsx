import React, { useContext, useState, Button } from 'react'
import logo from "../img/Logo.png"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
const Navbar = () => {

  const {currentUser, logout} = useContext(AuthContext)
  const navigate = useNavigate();


  return (
    <div className='navbar'>
      <div className="container">
        <Link className="logo" to="/">
          <img src={logo} alt=""/>
        </Link>
        <div className="links">
          <Link className='link' to="/">
            <h6>Home</h6>
          </Link>
          <Link className='link' to="/Reviews">
            <h6>Reviews</h6>
          </Link>
          <Link className='link' to="/About">
            <h6>About</h6>
          </Link>
          <Link className='link' to="/Contact">
            <h6>Contact</h6>
          </Link>
          <div className="user">
          {currentUser? 
          <img className="userP" src={currentUser.img} onClick={() =>navigate("/profile")}></img> : null}
          <Link className='link' to="/Profile">{currentUser?.username}</Link>
          </div>
          {currentUser? <span onClick={logout}>Logout</span> : <Link className='link' to="/login">Login</Link>}
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar