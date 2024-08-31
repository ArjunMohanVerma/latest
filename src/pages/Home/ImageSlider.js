import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: '100% 100%',
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height:"25rem",
}
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1675034743339-0b0747047727?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
  },
  {
    url: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1633681122703-3ce20f1e978d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://img.freepik.com/free-photo/interior-latino-hair-salon_23-2150555185.jpg?t=st=1722849263~exp=1722852863~hmac=fe73ea6232db341e49294fe62137939fe0b105440e0ba2e02e1edb1a809893a2&w=1060',
  },
  {
    url: 'https://images.unsplash.com/photo-1675034743433-bdc9aee1cafc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

 const ImageSlider = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default ImageSlider;
