import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import NewFile from './NewFile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const loginStatus = async () => {
      try {
        const response = await fetch('http://localhost:3001/logged_in', { 
          method: 'GET',
          credentials: 'include'
        });
        const data = await response.json();
        if (data.logged_in) {
          handleLogin(data);
        } else {
          handleLogout();
        }
      } catch (error) {
        console.log('api errors:', error);
      }
    };
    loginStatus();
  }, []);

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
    alert('Logged In successfully')
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  };
  
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login handleLogin={handleLogin} />} />
          <Route exact path='/signup' element={<Signup handleLogin={handleLogin} />} />
          <Route exact path="/newfile" element={<NewFile user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
