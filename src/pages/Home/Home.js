import React from "react";
import './Home.css';
import {ReactTyped} from "react-typed";
import ImageSlider from "./ImageSlider";





const Home = () => {
      return (<>
        <div className="home-container">
          <div>
                <ImageSlider className="slider"/>
          </div>
          
        <div className="home-banner-container" >
          <div className="home-text-section">
            <h1 className="primary-heading">
              Find Top-Rated{" "}
              <ReactTyped strings={["Salons and Exclusive Deals with VYLEE"]} typeSpeed={50} loop backSpeed={30}/>
            </h1></div><br/>
            <div className="primary-text">
            <p className="text">
            STKT Beauty & Technology is a company fueled by a singular mission: revolutionizing the salon industry through our innovative platform, VYLEE.<br/> VYLEE serves as a bridge, seamlessly connecting exceptional salon services with discerning customers seeking an empowering beauty experience.
            At STKT, we envision a thriving beauty ecosystem where both salons and clients flourish.In today's digital age, attracting new clients and streamlining operations are critical to success. That's why we created VYLEE, a comprehensive platform specifically designed to empower salon owners and elevate their businesses.
            <br/>
            </p><br/>
            
          </div>
          
        </div><br/><br/>
      </div>
      </>
    );
  };
  
  export default Home;
  