import React,{useContext, useState, useRef,useEffect} from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

export default function Signin() {
    const [ep, setEp] = useState({
      email: '',
      passw: ''
    });
    function handleChange(event) {
    const { name, value } = event.target;
    setEp((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
    console.log(name,value)
  }
  function onClicked(event){
    console.log(value)
    setValue({
      email:'',
      passw:''
    });
    event.preventDefault();
  }
  return (
    <div className="full-screen-container">
      <div className="login-container">
        <h1 className="login-title">SoJoU</h1>
          <form onSubmit={onClicked} style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
          <TextField 
                name='email'
                type='email'
                required
                autoComplete='off'
                value={ep.email}
                onChange={handleChange} 
                sx={{
                    margin:'30px',
                    width: '90%',
                    '& .MuiOutlinedInput-root':{
                      '& fieldset':{
                        borderColor: "white"
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                    '& .MuiOutlinedInput-root:hover':{
                      '& fieldset':{
                        borderColor: 'white'
                      }
                    }
                    }} 
                InputProps={{style: {color:'white'}}}
                InputLabelProps={{
                  style: { color:'white' },
                }}
                variant={'outlined'}
                label="Email" 
                id="outlined-basic"/>
            <TextField 
                name='passw'
                required
                autoComplete='off'
                value={ep.passw}
                onChange={handleChange} 
                sx={{
                    margin:'30px',
                    width: '90%',
                    '& .MuiOutlinedInput-root':{
                      '& fieldset':{
                        borderColor: "white"
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                    '& .MuiOutlinedInput-root:hover':{
                      '& fieldset':{
                        borderColor: 'white'
                      }
                    }
                    }} 
                InputProps={{style: {color:'white'}}}
                InputLabelProps={{
                  style: { color:'white' },
                }}
                variant={'outlined'}
                label="Password" 
                type="Password"
                id="outlined-basic"/>
            <button class="login-button"><Link style={{all:'unset'}} to='/'>Login</Link></button>
          </form>
      </div>
    </div>
  )
}
