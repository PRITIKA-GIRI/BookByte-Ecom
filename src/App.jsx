import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header'
import Login from './pages/Login'
import Register from './pages/Register'
import React, { useState } from 'react';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setShowLogin={setShowLogin}       // ✅ CORRECT
        setShowSignUp={setShowSignUp}
      />
      <Routes>
        <Route path="/" element={<Home
          showLogin={showLogin}
          showSignUp={showSignUp}
          setShowLogin={setShowLogin}
          setShowSignUp={setShowSignUp}
        />}></Route>
      </Routes>

    </Router>
  )
}

export default App;
