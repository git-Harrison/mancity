import React, {useState} from "react";
import {Link} from "react-router-dom";
import {IoHomeSharp, IoPersonSharp} from "react-icons/io5";
import {AiOutlineBarChart} from "react-icons/ai";

const SideMenuNav: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string>("");

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
    };

    return (
        <nav className="side-menu-wrap">
            <ul>
                <li>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/ea_sports_icon.webp`}
                        alt="ea_sports_icon"
                        className="ea_sports_icon"
                    />
                </li>
                <li
                    className={activeMenu === "home" ? "active" : ""}
                    onClick={() => handleMenuClick("home")}
                >
                    <Link to="/" className="menu-link">
                        <IoHomeSharp/>
                        <span>HOME</span>
                    </Link>
                </li>
                <li
                    className={activeMenu === "players" ? "active" : ""}
                    onClick={() => handleMenuClick("players")}
                >
                    <Link to="/players" className="menu-link">
                        <IoPersonSharp/>
                        <span>PLAYERS</span>
                    </Link>
                </li>
                <li
                    className={activeMenu === "scores" ? "active" : ""}
                    onClick={() => handleMenuClick("scores")}
                >
                    <Link to="/scores" className="menu-link">
                        <AiOutlineBarChart/>
                        <span>SCORES</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideMenuNav;
