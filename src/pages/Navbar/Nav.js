import React, { useState } from "react";

import "./main.css";
import { Link, NavLink } from "react-router-dom";

export default function Nav  ()  {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>


      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login/SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};


// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./main.css";

// function Navbar() {
// 	const navRef = useRef();

// 	const showNavbar = () => {
// 		navRef.current.classList.toggle(
// 			"responsive_nav"
// 		);
// 	};

// 	return (
// 		<header className="header">
// 			<h3 >LOGO</h3>
// 			<nav ref={navRef}>
// 				<a href="/home">Home</a>
// 				<a href="/about">About Us</a>
// 				<a href="/services">Services</a>
// 				{/* <a href="/ShopProducts">Products</a> */}
//                 <a href="blogs">Blog</a>
//                 <a href="/contact">Contact Us</a>
// 				<a href="/login">Login/SignUp</a>
// 				<button
// 					className="nav-btn nav-close-btn"
// 					onClick={showNavbar}>
// 					<FaTimes />
// 				</button>
// 			</nav>
// 			<button
// 				className="nav-btn"
// 				onClick={showNavbar}>
// 				<FaBars />
// 			</button>
// 		</header>
// 	);
// }


// export default Navbar;