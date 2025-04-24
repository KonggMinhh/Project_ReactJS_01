import React from "react";
import logo from "../assets/logo.svg";
import { sidebarMenu } from "../ultis/menu";
import { Link, NavLink } from "react-router-dom";
import path from "../ultis/path";

const notActiveStyle =
    "flex items-center px-6 py-3 text-sm font-medium text-[#32323d] leading-5 gap-3 parent hover:text-[#b72479]";
const activeStyle =
    "flex items-center px-6 py-3 text-sm font-medium  leading-5 gap-3 parent text-[#b72479] border-l-[3px] border-[#b72479]";
const SidebarLeft = () => {
    return (
        <aside className="w-[240px] h-[calc(100vh_-_90px)] bg-sidebar-left-bg">
            {/* Logo */}
            <Link
                to={path.HOME}
                // onClick={() => navigate(path.HOME)}
                className="fixed top-0 flex items-center pl-7 pr-[25px] h-[70px]"
            >
                <img
                    src={logo}
                    alt="logo"
                    className="w-[120px] h-10 object-contain hover:brightness-90"
                />
            </Link>
            {/* Navigation */}
            <nav className="pt-[70px] h-[calc(100vh_-_90px)]">
                <ul>
                    <li>
                        {sidebarMenu?.map((item) => (
                            <NavLink
                                to={item.path}
                                key={item.path}
                                end={item.end}
                                className={({ isActive }) =>
                                    isActive ? activeStyle : notActiveStyle
                                }
                            >
                                {item.icons}
                                <span>{item.text}</span>
                            </NavLink>
                        ))}
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SidebarLeft;
