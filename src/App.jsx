import React/*,{useEffect,useState,createContext}*/ from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ErrorPage from './error-page';
import Landing from './pages/Landing/Landing';
import { Navbar } from './components/navbar/Navbar.jsx';
export default function App(){
  
  return (
    // style={{backgroundColor: theme ? "black" :"#FFE15D"}}
    <div className="App" > 
    <Navbar/> 
        <Routes>
          <Route path="/" element={<Landing/>} errorElement={<ErrorPage/>} />
          {/* <Route path="/about" element={<AboutPage />}/>
          <Route path="/dashboard" element={<DashBoard />}/> */}
        </Routes>
    </div>
  )
}

