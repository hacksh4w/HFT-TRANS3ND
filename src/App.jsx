import React/*,{useEffect,useState,createContext}*/ from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ErrorPage from './error-page';
import Landing from './pages/landing/Landing';
import Navbar  from './components/navbar/Navbar.jsx';
import Mainpage from './pages/mainpage/Mainpage';
import Signin from './pages/authentication/Signin';
export default function App(){
  
  return (
    // style={{backgroundColor: theme ? "black" :"#FFE15D"}}
    <div className="App" > 
    <Navbar/> 
        <Routes>
          <Route path="/" element={<Signin/>} errorElement={<ErrorPage/>} />
          <Route path="/mainpage/*" element={<Mainpage />}/>
          <Route path="/landing" element={<Landing/>}></Route>
          {/* <Route path="/dashboard" element={<DashBoard />}/> */}
        </Routes>
    </div>
  )
}

