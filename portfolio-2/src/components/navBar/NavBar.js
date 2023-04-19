import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css"; 

function NavBar() {
  return (
    <nav id="navBarID" className="navbar sticky-top"> 
      
      <ul className="navbar-nav" >
        
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="About"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </li>

        <li className="nav-item ">
          <NavLink
            to="Projects"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </NavLink>
        </li>

        <li className="nav-item ">
          <NavLink
            to="Contact"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>

        <li className="nav-item ">
          <NavLink
            to="Resume"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Resumé
          </NavLink>
        </li>

      </ul>
     
      <img className="darwin" src={require("../images/darwin-flower.png")} alt="darwinLogo"></img>
      
    </nav>
    
  );
}

export default NavBar;
