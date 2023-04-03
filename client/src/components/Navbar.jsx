import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const handleClick = (e) => {
    console.log(window.innerWidth, window.innerHeight);
  };

  return (
    <div>
      {/* <button type="button" onClick={(e) => { handleClick(e); }}>
        TEST
      </button> */}

      <div className="navbar-container">
        {/* <img id="logo" alt="" /> */}
        <div>LOGO</div>
        <ul id="navbar">
          <li><a href="#featured">Featured</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#my-skills">My Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;