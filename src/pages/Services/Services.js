import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from "./Product";
import { productData, responsive } from "./Data";
import React from "react";
import "./Services.css";



export default function Services() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <>
    
    <div className="App" >
      <h1 style={{fontSize:"2.5rem", color:"#791dae"}}>Our Services</h1>
      <div>
      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>
      </div><br/>
      
      <div  className="AI">
      
      <h1 className="h12">Additional Information</h1>
      
        
        <p className="xt">Effortless onboarding lets you showcase your salon's strengths quickly.
            Dedicated support ensures you get the most out of VYLEE.
            VYLEE equips salons for success in the digital age, bringing new clients, streamlining operations, and enhancing client engagement.
        </p>
      
      </div>
      <br/><br/><br/>
      </div>
      
      
    
    </>
  );
  
    
  }