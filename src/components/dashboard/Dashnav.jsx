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
    <div style={{   width: '13vw', 
                    backgroundColor:'#9A0505',
                    minHeight:'100vh',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'flex-start',
                    flexDirection:'column',
                    borderTopRightRadius:'20px',
                    borderBottomRightRadius:'20px'
                    }}>
                    <img style={{height: '100px',margin:'15px'}} src={dp}></img>
        <div style={{
        backgroundColor:'white', 
        borderRadius:'20px',
        width:'90%',
        minHeight:'30vh',
        marginTop: '15px',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column'
        }}>
            <div style={{display:'flex',flexDirection:'column'}}>
                <div className='flex'>
                    <div className='flex' style={{height:'100%',width:'30%',paddingLeft:'20px'}}><HomeIcon sx={{fontSize:'30px','&:hover':{color: '#E39B06'}}}/></div>
                    <Link to='/landing' style={{all:'unset',width:'70%'}}><div style={{height:'100%'}}><p style={{margin: '20px'}}>Home</p></div></Link>
                </div>

                <div className='flex'>
                    <div className='flex' style={{height:'100%',width:'30%',paddingLeft:'20px'}}><AppsIcon sx={{fontSize:'30px'}}/></div>
                    <Link to='/mainpage/dashboard' style={{all:'unset',width:'70%'}}><div style={{height:'100%'}}><p style={{margin: '20px'}}>Dashboard</p></div></Link>
                </div>
                <div className='flex'>
                    <div className='flex' style={{height:'100%',width:'30%',paddingLeft:'20px'}}><PersonIcon sx={{fontSize:'30px'}}/></div>
                    <Link to='/mainpage' style={{all:'unset',width:'70%'}}><div style={{height:'100%'}}><p style={{margin: '20px'}}>Profile</p></div></Link>
                </div>
                <div className='flex'>
                    <div className='flex' style={{height:'100%',width:'30%',paddingLeft:'20px'}}><SearchIcon sx={{fontSize:'30px'}}/></div>
                    <Link to='/mainpage' style={{all:'unset',width:'70%'}}><div style={{height:'100%'}}><p style={{margin: '20px'}}>Categories</p></div></Link>
                </div>
                <div className='flex'>
                    <div className='flex' style={{height:'100%',width:'30%',paddingLeft:'20px'}}><WorkOutlineIcon sx={{fontSize:'30px'}}/></div>
                    <Link to='/mainpage' style={{all:'unset',width:'70%'}}><div style={{height:'100%'}}><p style={{margin: '20px'}}>Request A Job</p></div></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
