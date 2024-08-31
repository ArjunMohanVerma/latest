import React,{ useState} from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const [details, setDetails] = useState({
    name:"",
    email:"",
    password:"",
  })

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setDetails((prev)=>{
      return{...prev, [name]: value};
    }); 
  };

  const handleClick=(e)=>{
    console.log(details.name);
    console.log(details.email);
    console.log(details.password);
    setDetails({name:"",email:"",password:""})
  }
  return (
    <div className="ou">
    <div className="addser">
      <h3>Sign Up</h3>
      <form className="addserform">
        <div className="inputp">
          <label htmlFor="name" className="l">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter your name"
            onChange={handleChange} value={details.name}
            required
          /><br/>
          <label htmlFor="email" className="l">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
            onChange={handleChange} value={details.email}
            required
          /><br/>
          <label htmlFor="Password" className="l">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter Password"
            onChange={handleChange} value={details.password}
            required
          /><br/>
         
          <motion.button type="submit" onClick={handleClick} className="btn btn-success b" whileTap={{ scale: 0.85 }}>
            Sign Up
          </motion.button>
         
        </div>
      </form>
      <div className="ln">
        <p className="par">Already have an Account?&nbsp;&nbsp;<Link to="/login" className="lgin">
          Login
        </Link>
        </p>
        
      </div>
    </div>
    </div>
  );
};

export default Signup;