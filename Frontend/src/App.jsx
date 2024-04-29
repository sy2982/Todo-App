import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import AnimatedCursor from "react-animated-cursor";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { signInWithGoogle } from './components/Auth';
import LoginSignup from './components/LoginSignup';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithGoogle();
      const userEmail = userCredential.user.email; // Retrieve user's email
      localStorage.setItem('userEmail', userEmail); // Store user's email locally
      setLoggedIn(true);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };  

  return (
    <Router>
      <div>
        <AnimatedCursor
          innerSize={20}
          outerSize={40}
          color="100, 100, 100"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={1.5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        <Routes>
          <Route path="/" element={loggedIn ? <Navigate to="/todo" /> : <LoginSignup onGoogleSignIn={handleGoogleSignIn} />} />
          <Route path="/todo" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;