import React,{useState,useEffect} from 'react';
 import { useLocation } from 'react-router-dom';
 import { TypeAnimation } from 'react-type-animation';
export default function Navbar() {
 
    var location = useLocation().pathname
    if (location === '/'){
            return (
                <div style={{
                padding:'0 20px',
                position:'fixed',
                zIndex:'1000000',
                height: "150px",
                display:'flex',
                alignItems:'center',
                width: '96vw',
                justifyContent:'center',
                flexDirection:'row',
                boxShadow:'none'}}>
        
            <style>@import url('https://fonts.googleapis.com/css2?family=Kanit&family=Montserrat&display=swap')</style>
            <TypeAnimation
                sequence={[
                    'Society, Jobs, Utilities,', 
                    2000, 
                    'For you', 
                    2000, 
                    () => {
                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                    }
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                speed={50}
                deletionSpeed={75}
                style={{ fontSize: '4rem',color: 'white',fontFamily: "'Kanit', sans-serif" }}
                />
                </div>
            );
    }
}
