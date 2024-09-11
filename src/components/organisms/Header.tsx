import React from "react";
import {Link} from "react-router-dom";
import {FaUserCircle, FaSearch} from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">City</div>
            <div className="header-right">
                <nav>
                    <ul>
                        <li><Link to="/players">Player</Link></li>
                        <li><Link to="/fixtures">Fixtures</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className="icons">
                    <FaSearch className="icon"/>
                    <FaUserCircle className="icon"/>
                </div>
            </div>
        </header>
    );
};

export default Header;