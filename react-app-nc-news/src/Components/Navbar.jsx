import React from "react";
import { Link } from "react-router-dom";
import {FaHome} from 'react-icons/fa'
import User from "./User";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>NC News</h1>
            <Link className="navlink" to="/"><FaHome/></Link>
            <User />
        </nav>
     );
}
 
export default Navbar;
