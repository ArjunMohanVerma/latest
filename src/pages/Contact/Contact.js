import React, { useState } from "react";
import { useRef } from "react";
import vyleeqr from"./vyleeqr.png";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { motion } from "framer-motion";



export default function Contact(){
  const [details, setDetails] = useState({
    user_name:"",
    user_mobile:"",
    user_email:"",
    message:"",
  })

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setDetails((prev)=>{
      return{...prev, [name]: value};
    }); 
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_476web2', 'template_eraysr9', form.current, {
        publicKey: 'CxAgOyvdjPRMfCtC8',
      })
      .then(
        () => {
          alert('Message Sent!');
          setDetails({user_email:"",user_name:"",user_mobile:"",message:""})
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return(
    <>
    <div className="centainer">
      <h2 className="title"><u>Contact Us</u></h2>
      <div className="out">
        <div className="div1">
        <div className="o2">
        <p className="text1"> 
        We are dedicated to transforming the salon industry by<br/> seamlessly connecting salon owners with customers through <br/>innovative and convenient solutions.
        Our platform acts as<br/> a bridge, offering exceptional salon services to discerning <br/>customers who seek high-quality experiences.
        </p>
        </div>
        <div>
          <p className="tag">Connect with us on Instagram</p><br/>
          <img src={vyleeqr} className="img" alt="qrcode"/>
    
        <h2 className="add"><u>Address:</u></h2>
        <p className="desc">
        STKT BEAUTY AND TECHNOLOGY PVT LTD<br/>
        FF-229, FIRST FLOOR, TOWER A ANSAL API, PALAM<br/>
        CORPORATEPLAZA, GURUGRAM, HARYANA 122017<br/>
        PHONE:9311220116, EMAIL: SUPPORT@VYLEESALON.IN<br/>
        CIN No.:U96905HR2024PTC119569
        </p>
        </div>
        </div>
        
        {/* form start here */}

        <div className="div2"><br/>
         <p className="t2"><u>Contact Us</u></p>
          <br/><br/>
          <div className="formcont">
   

            <form ref={form} onSubmit={sendEmail}>
              <table className="table">
              <tr>
              <td><label className="label">Name : <br/></label></td>
              <td><input className="input"  required type="text" onChange={handleChange} placeholder="Enter Name" value={details.user_name} id="name" name="user_name"></input></td>
              </tr><br/><br/>
              <tr>
              <td><label className="label">Mobile : <br/></label></td>
              <td><input className="input" required type="number" onChange={handleChange} placeholder="Enter Mobile" value={details.user_mobile} id="mob" name="user_mobile"></input></td>
              </tr><br/><br/>
              <tr>
              <td><label className="label">Email : </label></td>
              <td><input className="input" required type="email" onChange={handleChange} placeholder="Enter Mail" value={details.user_email} id="mail" name="user_email"></input></td>
              </tr><br/><br/>
              <tr>
              <td><label className="label">Message : <br/></label></td>
              <td><textarea className="txtarea" required onChange={handleChange} name="message" rows="5" cols="25" value={details.message} id="msg" placeholder="Enter Your Message Here" ></textarea></td>
              </tr><br/>
              </table>
              <motion.button value="Send" className="btn"
              whileTap={{ scale: 0.85 }}
              >
                  Submit
              </motion.button>
            </form>
       
            
            </div>
            </div>


        </div><br/>
        </div>
</>
)};

