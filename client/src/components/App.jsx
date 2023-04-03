import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar.jsx';

const App = () => {

  const handleClick = (e) => {
    console.log('Link to Resume PDF');
  };

  return (
    <div className="app-container">
      <Navbar />
      <p>
        Hi, my name is
        {' '}
        <br />
        Madeline King.
        <br />
        I love the art of design and
        <br />
        building things for the web.
      </p>
      <p>
        I am a Software Engineer who specializes in
        <br />
        Front End Development.
      </p>
      <button type="button" onClick={(e) => { handleClick(e); }}>Check Out My Resume</button>
    </div>
  );
};

export default App;