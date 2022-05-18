import React from "react";
import { NavLink } from "react-router-dom";

// Add basic styling for NavLinks
const linkStyles = {
    display:"inline-block",
    width:"50px",
    padding:"12px",
    margin:"1 6px 6px",
    background:"blue",
    textDecoration:"none",
    color:"white",
  }
  
  // Define the NavBar component
  
  function NavBar(){
    return(
      <div>
        <NavLink to="/"
        exact 
        style={linkStyles}
        activeStyle={{background:"darkblue",}}
        
        >
          Home
  
        </NavLink>
        <NavLink to="/about"
        exact
        style={linkStyles}
        activeStyle={{background:"darkblue",}}
        
        >
          About
        </NavLink>
  
        <NavLink 
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{backround:"darkblue",}}
        >
          Login
        </NavLink>
  
  
      </div>
    )
  }
export default NavBar;  