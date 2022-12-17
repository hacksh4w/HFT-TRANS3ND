import React/*,{useEffect,useState,createContext}*/ from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ErrorPage from './error-page';
import Landing from './pages/Landing/Landing';
export default function App(){
  
  return (
    <div className="App" style={{backgroundColor: theme ? "black" :"#FFE15D"}} >
      <Router>  
      {/*<Navbar />*/}
        <Routes>
          <Route path="/" element={<Landing/>} errorElement={<ErrorPage/>} />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/dashboard" element={<DashBoard />}/>
        </Routes>
      </Router>
    </div>
  )
}

