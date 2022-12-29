import React from 'react'
import carp from '../../assets/carp.svg';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import './Card.css';
const Card = (props) => {
      return (
        <div style={{ height: '300px', width: '250px',padding:'20px',borderRadius: '37.5px' }} className='parent'>
        <style> @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap') </style>
        <div style={{
            backgroundImage: `url(${carp})`,
            width: '100%',
            height: '30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column'
        }}>
            <p style={{ fontFamily: "'Staatliches', cursive", 
                        letterSpacing: '0.03em', 
                        fontWeight: '400',
                        fontSize: '37px', 
                        lineHeight: '60px', 
                        color: '#E39B06', 
                        padding: '5px' }}>{props.job}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row',background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), #FFFFFF'}} className='a1'>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '50%'  }}>
                <p className='Jobdes'>Job Description</p>
                <p className='des'> lorem ipsum asadasfasfasf f afasfasfasfasfa a shgn h hnhgnhn  hgnghn ghmghm </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '50%',justifyContent:'center',alignItems:'center',margin:'7px' }}>
                <PersonIcon sx={{fontSize:'20px',color:'#9A0505'}}/>
                <p style={{fontSize:'13px',color:'#9A0505'}}>@{props.username}</p>
                <PlaceIcon sx={{fontSize:'20px',color:'#9A0505',marginTop:'25px'}}/>
                <p style={{fontSize:'13px',color:'#9A0505'}}>Kochi, Kerala</p>
            </div>
        </div>
    </div>
      );
}

export default Card;