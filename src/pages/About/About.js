import "./About.css";
import video from './video.mp4';
import {ReactTyped} from "react-typed";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from 'react-player';

const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url:
    "https://youtu.be/LKVwsdkiJw4?si=rViBTYpBPijeSCTl"
      
  },
  {
    label: "Image 1",
    alt: "image1",
    url:
    "https://youtu.be/lhnrvhSVjFw?si=KkYEJ3VP1e7Xzv0L"
      
  },
  {
    label: "Image 1",
    alt: "image1",
    url:
    "https://youtu.be/LKVwsdkiJw4?si=rViBTYpBPijeSCTl"
      
  },
  // {
  //   label: "Image 2",
  //   alt: "image2",
  //   url:
  //     "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png"
  // },
  // {
  //   label: "Image 3",
  //   alt: "image3",
  //   url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg"
  // },
  // {
  //   label: "Image 4",
  //   alt: "image4",
  //   url:
  //     "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png"
  // }
];

// video slides
const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    
    <ReactPlayer
      width="560"
      height="315"
      url={image.url}
      
    />
          
    {/* <p className="legend">{image.label}</p> */}
  </div>
));

export default function About() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
 return (
 <>
 <div className="about" >
      <h1 className="h1c">About Us</h1>
      <p className="ft">Find Top-Rated{" "}
      <ReactTyped strings={["Salons and Exclusive Deals with VYLEE"]} typeSpeed={50} loop backSpeed={30}/></p>
      <br/>
      <div className="nt">
      <p className="nt">At STKT Beauty and Technology, we’re passionate about revolutionizing the salon industry with our innovative platform, VYLEE. VYLEE connects salon owners with customers, making it easier for everyone to access and enjoy highly qualified salon services. VYLEE serves as a seamless bridge between exceptional salon services and customers seeking an empowering and luxurious beauty experience.
      For clients, VYLEE offers an opportunity to showcase their exquisite services to a broader audience, attracting customers who appreciate and seek the highest standards of beauty care. Our platform provides a seamless interface for salons to manage appointments, promote special offers, and engage with a clientele that values luxury and refinement.
      For customers, VYLEE is the ultimate destination to explore a curated selection of luxury salons renowned for their vibrant, youthful, luminous, elegant, and exotic beauty services.</p><br/>
      </div>
      <br/>
      <div className="conte">
        <div className="centinal"> 
        <h2 className="headings">Our Vision</h2>
        <p className="daata">To be the leading digital platform that transforms
            the salon industry by empowering salon owners
                and providing customers with exceptional beauty
            experiences.</p>
        </div>

        <div className="centinal">
        <h2 className="headings">Our Mission</h2>
        <p className="daata">To revolutionize the salon industry by seamlessly
            connecting salon owners with discerning
            customers through innovative, convenient, and
            high-quality digital solutions, ensuring access to
            top-notch salon services for everyone.</p>

        </div>

      </div>
    
      <br />
      <br />

      {/*video section here */}
      {/* <div>
      <h3 className="ws">Browse through some of our videos</h3>
      <br />
      <div className="appyy">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
      </div>
      {/* <div className="videos">
      <video
          width="560"
          height="315"
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen controls
        ></video>
        <video
          width="560"
          height="315"
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen controls
        ></video>
        <video
          width="560"
          height="315"
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen controls
        ></video>
        </div> 
      </div> */}
    </div>
 </>
 )
}
