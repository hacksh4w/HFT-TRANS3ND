import React from 'react'
import dp from '../../assets/dp.svg';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import './Dashnav.css'
import HomeIcon from '@mui/icons-material/Home';
export default function () {
  return (
    <div style={{   width: '30vw', 
                    backgroundColor:'#9A0505',
                    minHeight:'100vh',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'flex-end',
                    flexDirection:'column',
                    borderTopRightRadius:'20px',
                    borderBottomRightRadius:'20px'
                    }}>
        <Link to='/'><HomeIcon sx={{fontSize:'50px',position:'absolute',top:'20px',left:'20px',color:'white',
            '&:hover':{
                color: '#E39B06'
            }}}/></Link>
        <div style={{
        backgroundColor:'white', 
        borderRadius:'20px',
        width:'80%',
        minHeight:'75vh',
        marginBottom: '50px',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column'
        }}>
            <img style={{height: '150px',position:'absolute',top: '75px',left:'150px'}} src={dp}></img>
            <div style={{display:'flex',flexDirection:'column'}}>
                <div className='flex'>
                    <div className='flex' style={{height:'100%',width:'30%',paddingLeft:'20px'}}><AppsIcon sx={{fontSize:'50px'}}/></div>
                    <Link to='/mainpage' style={{all:'unset',width:'70%'}}><div style={{height:'100%'}}><h1 style={{margin: '20px'}}>Dashboard</h1></div></Link>
                </div>
                <div className='flex'>
                    <div className='flex' style={{height:'100%',width:'30%',paddingLeft:'20px'}}><PersonIcon sx={{fontSize:'50px'}}/></div>
                    <Link to='/mainpage' style={{all:'unset',width:'70%'}}><div style={{height:'100%'}}><h1 style={{margin: '20px'}}>Profile</h1></div></Link>
                </div>
                <div className='flex'>
                    <div className='flex' style={{height:'100%',width:'30%',paddingLeft:'20px'}}><WorkOutlineIcon sx={{fontSize:'50px'}}/></div>
                    <Link to='/mainpage' style={{all:'unset',width:'70%'}}><div style={{height:'100%'}}><h1 style={{margin: '20px'}}>Request A Job</h1></div></Link>
                </div>
                <div className='flex'>
                    <div className='flex' style={{height:'100%',width:'30%',paddingLeft:'20px'}}><SearchIcon sx={{fontSize:'50px'}}/></div>
                    <Link to='/mainpage' style={{all:'unset',width:'70%'}}><div style={{height:'100%'}}><h1 style={{margin: '20px'}}>Categories</h1></div></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
