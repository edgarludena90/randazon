import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Reviews from "./components/Reviews"
import Home from "./components/Home"
import User from "./components/User"
import Restaurants from "./components/Restaurants"
import Login from "./components/LoginPage"
import Signup from "./components/SignupPage"

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user))
      }
    });
  }, []);


  function handleLogin(user) {
    setCurrentUser(user);
  }

  function handleLogout() {
    setCurrentUser(null);
  }



  return (
    <div className="App">
      <Navbar user={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/user" element={<User user={currentUser} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} onLogout={handleLogout} user={currentUser} />} />
        <Route path="/signup" element={<Signup user={currentUser} setUser={handleLogin} />} />
        <Route path="/restaurants/:id" element={<Reviews user={currentUser} />} />
      </Routes>
    </div>
  );
}

export default App;