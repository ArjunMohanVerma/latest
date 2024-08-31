import React from "react";
import "./Product.css";
import { motion, transform } from "framer-motion";

export default function Product(props) {
  

  function handleClick(){
    
    var elms = document.getElementsByClassName("desk");
    Array.from(elms).forEach((x) => {
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    })
    
  }



  return (
    <div className="ard">
      <img className="product--image" src={props.url} alt="product image" />
      <h2 className="hg">{props.name}</h2>
      <p className="desk">{props.description}</p>
      <p>
        <motion.button id="btn" onClick={handleClick} className="ton" whileTap={{ scale: 0.85 }}>Explore More!</motion.button>
      </p>
    </div>
  );
}

