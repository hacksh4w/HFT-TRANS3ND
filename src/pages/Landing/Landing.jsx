import React,{useRef,useEffect,useState} from 'react'
import bg from "../../assets/Frame7.svg"
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import recred from '../../assets/recred.png';
import recwhite from '../../assets/recwhite.png';

const ZoomOutExample = () => {
    const images = [
        bg,
        bg,
        bg,
    ];
    const indicators = ()=>(<img></img>)
    const [pslide, setPsilde] = useState(1);
    const ref = useRef();
  return (
      <div>
        <style> @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Staatliches&display=swap'); </style>
        <Zoom scale={1} indicators={false} >
            {images.map((each, index) => (
          <div ref={ref} key={index} style={{ width: "100%",height:'100vh',backgroundImage:`url(${each})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
            {/* <img style={{ objectFit: "cover", width: "100%",height:'100vh'}} alt="Slide Image" src={each} /> */}
            <div style={{fontWeight:'400',fontSize:'300px',color:'white',fontFamily: "'Staatliches', cursive",position:'absolute',right:'40px',bottom:'-70px'}}>SOJOU</div>
          </div>
      ))}
      {/*  */}
    </Zoom>
    <div style={{minHeight: '100vh',backgroundColor:'brown'}}>

    </div>
      </div>
  );
};

export default ZoomOutExample;