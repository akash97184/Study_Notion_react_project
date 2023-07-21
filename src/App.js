import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Login from './pages/Login' ;
import Signup  from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
// Importing Private route component which checks if user has logged in or not before rendering dashboard page
import PrivateRoute from "./components/PrivateRoute";

function App() {

  // Using useState for handling the 2 out of 4 button to show up
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element= {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>


      </Routes>
    </div>
  )
}

export default App;
