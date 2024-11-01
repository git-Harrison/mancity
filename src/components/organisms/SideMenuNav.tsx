import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {IoHomeSharp, IoPersonSharp} from "react-icons/io5";
import {AiOutlineBarChart} from "react-icons/ai";
import {BiTransferAlt} from "react-icons/bi";
import {FaMagic} from 'react-icons/fa';

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

const SideMenuNav: React.FC = () => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState<string>("");

    useEffect(() => {
        const pathToMenu: { [key: string]: string } = {
            "/": "home",
            "/players": "players",
            "/scores": "scores",
            "/transfer": "transfer",
            "/enhancement": "enhancement",
            "/squadmaker": "squadmaker",
        };
        setActiveMenu(pathToMenu[location.pathname] || "");
    }, [location.pathname]);

    const menuItems = [
        {name: "home", path: "/", icon: <IoHomeSharp/>, label: "HOME"},
        {name: "players", path: "/players", icon: <IoPersonSharp/>, label: "PLAYERS"},
        {name: "scores", path: "/scores", icon: <AiOutlineBarChart/>, label: "SCORES"},
        {name: "transfer", path: "/transfer", icon: <BiTransferAlt/>, label: "TRANSFER"},
        {name: "enhancement", path: "/enhancement", icon: <FaMagic/>, label: "ENHANCE"},
        {name: "squadmaker", path: "/squadmaker", icon: <FaMagic/>, label: "SQUAD MAKER"},
    ];

    const handleMenuClick = (name: string, label: string) => {
        setActiveMenu(name);
        if (window.gtag) {
            window.gtag("event", "menu_click", {
                event_category: "navigation",
                event_label: label,
            });
        }
    };

    return (
        <nav className="side-menu-wrap">
            <ul>
                <li>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/ea_sports_icon.webp`}
                        alt="ea_sports_icon"
                        className="ea_sports_icon invertible"
                    />
                </li>
                {menuItems.map(({name, path, icon, label}) => (
                    <li key={name} className={activeMenu === name ? "active" : ""}>
                        <Link
                            to={path}
                            className="menu-link"
                            onClick={() => handleMenuClick(name, label)}
                        >
                            {icon}
                            <span>{label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SideMenuNav;
