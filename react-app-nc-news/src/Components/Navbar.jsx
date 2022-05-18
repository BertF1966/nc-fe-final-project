import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import User from "./User";


const Navbar = () => {
   
  return (
    <nav className="navbar">
      <h1>NC News</h1>
      <User user='user'/>
      <Link className="home-button" to="/">
        <FaHome />
      </Link>
    </nav>
  );
};

export default Navbar;
