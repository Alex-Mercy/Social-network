import React from "react";
import { NavLink } from "react-router-dom";
import CssNavbar from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={CssNavbar.nav}>
                <div>
                    <NavLink to="/profile" className = { navData => navData.isActive ? CssNavbar.active : CssNavbar.item }>Profile</NavLink>
                </div>
                <div className={CssNavbar.item}>
                    <NavLink to="/dialogs" className = { navData => navData.isActive ? CssNavbar.active : CssNavbar.item } >Messages</NavLink>
                </div>
                <div className={CssNavbar.item}>
                    <NavLink to="/users" className = { navData => navData.isActive ? CssNavbar.active : CssNavbar.item } >Users</NavLink>
                </div>
                <div className={CssNavbar.item}>
                    <NavLink to="/news" className = { navData => navData.isActive ? CssNavbar.active : CssNavbar.item } >News</NavLink>
                </div>
                <div className={CssNavbar.item}>
                    <NavLink to="/music" className = { navData => navData.isActive ? CssNavbar.active : CssNavbar.item } >Music</NavLink>
                </div>
                <div className={CssNavbar.item}>
                    <NavLink to="settings" className = { navData => navData.isActive ? CssNavbar.active : CssNavbar.item } >Settings</NavLink>
                </div>
                <div className={CssNavbar.item}>
                    <NavLink to="login" className = { navData => navData.isActive ? CssNavbar.active : CssNavbar.item } >Login</NavLink>
                </div>
            </nav>
    )
}


export default Navbar;