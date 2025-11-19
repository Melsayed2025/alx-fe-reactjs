import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav style={{backgroundColor: "#f4f4f4",
        padding: "1rem",
        display: "flex",
        gap: "1rem",
        justifyContent: "center",}}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/services">Services</Link>
    <Link to="/contact">Contact</Link>
    </nav>
  )
}
export default Navbar;