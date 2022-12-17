import React,{useState,useEffect} from 'react';
 import { useLocation } from 'react-router-dom';

export default function Navbar() {
 
    var location = useLocation().pathname
    if (location === '/'){
            return (
                <div style={{
                padding:'0 20px',
                position:'fixed',
                zIndex:'1000000',
                background: 'linear-gradient(180deg, #9A0505 -29.67%, rgba(154, 5, 5, 0) 100%)',
                height: "109px",
                display:'flex',
                alignItems:'center',
                width: '96vw',
                justifyContent:'flex-end',
                flexDirection:'row',
                boxShadow:'none'}}>
        
            <style>@import url('https://fonts.googleapis.com/css2?family=Kanit&family=Montserrat&display=swap')</style>
                    <button style={{
                                    display:'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '150px',
                                    height: '60px',
                                    border: '3.16682px solid #E39B06',
                                    borderRadius: '23.9651px',
                                    background:'transparent',
                                    margin:'0 75px'}}>
                            <h5 style={{color:'white',fontSize:'1.8rem',fontFamily: "'Kanit', sans-serif"}}>Login</h5>
                    </button>
                    <button style={{display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '10px 25px',
                                    gap: '15px',
                                    width: '150px',
                                    height: '60px',
                                    backgroundColor: '#E39B06',
                                    borderRadius: '20px',
                                    border:'none'
                                    }}><h5 style={{color:'white',fontSize:'1.8rem',fontFamily: "'Kanit', sans-serif"}}>Sign Up</h5></button>
                </div>
            );
    }
}
