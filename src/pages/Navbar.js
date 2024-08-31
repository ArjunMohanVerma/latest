import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React from "react"
import "../styles.css"

export default function Navbar() {
  
  return (
    <nav className="nav" style={{height:"3rem"}}>
      <Link to="/" className="site-title">
      <p style={{float:"left",fontSize:"1rem",marginTop:"1.5vw",marginLeft:"0vw",display:"inline-block",textShadow:"2px 2px purple"}}>
                STKT<br/>
            <span style={{fontSize:"0.9vw",float:"left",textShadow:"3px 3px purple"}}>Beauty and Technology</span>
            </p>
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/about">About Us</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/ShopProducts">Products</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/contact">Contact Us</CustomLink>
        
        
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )

}
