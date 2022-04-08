import React from "react";
import { Link } from "react-router-dom";
import {FaHome} from 'react-icons/fa'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link className="navlink" to="/"><FaHome/></Link>
        </nav>
     );
}
 
export default Navbar;
