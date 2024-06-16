import React from 'react';
import { NavLink } from 'react-router-dom';
 // Create and use a separate CSS file for custom styles

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark flex-column">
      <div className="navbar-nav w-100">
        <ul className="navbar-nav flex-column w-100">
          <li className="nav-item">
            <NavLink to={"project"} className={'nav-link btn btn-outline-dark' } style={{color:"rgba(255,255,255,0.8)", border:"1px solid black"}}>
              PROJECTS
            </NavLink>
          </li>
          <li className="nav-item my-2">
            <NavLink to={"skills"} className={'nav-link btn btn-outline-dark '} style={{color:"rgba(255,255,255,0.8)", border:"1px solid black"}}>
              SKILLS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/education"} className={'nav-link btn btn-outline-dark' } style={{color:"rgba(255,255,255,0.8)", border:"1px solid black"}}>
              EDUCATION
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
