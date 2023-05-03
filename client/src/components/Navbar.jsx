import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BsGithub, BsLinkedin } from 'react-icons/bs';


const Navbar = () => {
  const handleClick = (e) => {
    console.log(window.innerWidth, window.innerHeight);
  };

  return (
    <div className="navbar-container">
      {/* <img id="logo" alt="" /> */}
      <div style={{ border: '3px dotted green' }}>LOGO</div>
      <ul id="navbar-refs" style={{ listStyleType: 'none', padding: '0em', margin: '0em' }}>
        <li><a href="featured">Featured</a></li>
        <li><a href="about">About</a></li>
        <li><a href="my-skills">My Skills</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
      <div id="navbar-social-links">
        <div className="social-link">
          <BsLinkedin size={25} style={{ marginRight: '0.5em' }} />
        </div>
        <div className="social-link">
          <BsGithub size={25} style={{ marginRight: '0.5em' }} />
        </div>
        <div className="social-link">
          <GrInstagram size={25} style={{ marginRight: '0.5em' }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;