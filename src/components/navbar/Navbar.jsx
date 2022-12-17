import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import InputAdornment from '@mui/material/InputAdornment';
import searchIcon from '../../assets/SearchIcon.svg'
const provider = new GoogleAuthProvider();

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
export function Navbar(props) {
  const [searchValue, setSearchValue] = React.useState('');
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  function handleChange(event){
    const value = event.target.value;
    setSearchValue((preValue)=>{
        return{
            ...preValue,
            value
        }
    })
    console.log(value)
  }
  function signIn(){
    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
    <HideOnScroll {...props}>
      <AppBar component="nav" sx={{
                        padding:'0 20px',
                        background: 'linear-gradient(180deg, #9A0505 -29.67%, rgba(154, 5, 5, 0) 100%)',
                        height: "109px",
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:'column',
                        boxShadow:'none'}}>
        <Toolbar sx={{display:'flex',justifyContent:'flex-end',alignItems:'center',flexDirection:'row',width:'95vw'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <button onClick={()=>(setSearch(!search))} style={{background:'transparent',border:'none',display: search ? 'none' : 'flex'}}>
            <img style={{height:'60px'}} src={searchIcon}></img>
          </button>
          <TextField 
                name='Name'
                autoComplete='off'
                onChange={handleChange} 
                sx={{
                    width: '50%',
                    display: search ? 'flex' : 'none',
                    transition: '1s',
                    '& .MuiOutlinedInput-root':{
                        borderRadius:'20px',
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
                            <button onClick={()=>(setSearch(!search))} style={{background:'transparent',border:'none',display: search ? 'flex' : 'none'}}>
                                    <img style={{height:'55px'}} src={searchIcon}></img>
                            </button>
                            </InputAdornment>),
                            style: {color:'white'}}}
                InputLabelProps={{
                  style: { color:'white' },
                }}
                variant='outlined'
                label=''
                id="outlined-basic"/>
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
                          }} onClick={()=>(signIn())}>
            <h5 style={{color:'white',fontSize:'1.7rem',fontFamily: "'Kanit', sans-serif"}}>Sign up</h5>
          </button>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
}