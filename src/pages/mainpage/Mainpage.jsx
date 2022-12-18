import React,{useState} from 'react';
import Dashnav from '../../components/dashboard/Dashnav';
import { TextField } from '@mui/material';
import {InputAdornment} from '@mui/material';
import searchIcon from '../../assets/frame71.svg';
import { Route,Routes } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
export default function Mainpage() {
  const [value,setValue] = useState('');
  const [search, setSearch] = useState(true);
  function handleChange(event){
    setValue((preValue)=>{
        return{
            ...preValue,
            value
        }
    })
    console.log(value)
  }
  return (
    <div style={{backgroundColor: 'white', minHeight:'100vh',display:'flex',flexDirection:'row'}}>
        <Dashnav/>
        <div style={{width:'87vw',display:'flex',alignItems:'center',justifyContent:'flex-start',flexDirection:"column"}}>
        <button onClick={()=>(setSearch(!search))} style={{background:'transparent',border:'none',display: search ? 'none' : 'flex',padding:'30px',position:'relative',left:'9.5px'}}>
                                    <img style={{height:'55px'}} src={searchIcon}></img>
                            </button>
        <TextField 
                name='Name'
                autoComplete='off'
                onChange={handleChange} 
                sx={{
                    width: '70%',
                    paddingTop:'30px',
                    paddingLeft:'60px',
                    display: search ? 'flex' : 'none',
                    transition: '1s',
                    '& .MuiOutlinedInput-root':{
                        borderRadius:'20px',
                        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #FFFFFF;',
                      '& fieldset':{
                        borderColor: 'white'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white'
                      },
                    },
                    '& .MuiOutlinedInput-root:hover':{
                      '& fieldset':{
                        borderColor:'white'
                      }
                    }
                    }} 
                InputProps={{startAdornment: (
                            <InputAdornment position="start">
                            <button onClick={()=>(setSearch(!search))} style={{background:'transparent',border:'none',display: search ? 'flex' : 'none',position:'relative',right:'35px',zIndex:'10000000'}}>
                                    <img style={{height:'55px'}} src={searchIcon}></img>
                            </button>
                            </InputAdornment>),
                            style: {color:'black'}}}
                InputLabelProps={{
                  style: { color:'white' },
                }}
                variant='outlined'
                label=''
                id="outlined-basic"/>
             <Routes>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
             </Routes>   
        </div>
    </div>
  )
}
