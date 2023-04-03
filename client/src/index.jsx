import { Provider } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { createBrowserHistory } from 'history';
import App from './components/App.jsx';
import './assets/styles.css';
// import store from './store.js';

const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <Provider store={store}>
  <BrowserRouter history={history}>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  </BrowserRouter>,
  // </Provider>,
);