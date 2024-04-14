// App.js
import React from 'react';
import Home from './components/pages/home'; 
import Account from './components/pages/account';
import History from './components/pages/history';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Home/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
