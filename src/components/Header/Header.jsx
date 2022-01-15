import React from "react";
import { NavLink } from "react-router-dom";
import styles from"./Header.module.css";

const Header = (props) => {
    return (
<header className={styles.header}>
            <img src='https://i.pinimg.com/originals/e8/7a/fb/e87afb485ae35f89aceef01bc65ff1c0.png' />
        <div className={styles.loginBlock} >
            { props.isAuth ? <div>{props.login} <div> <button onClick={props.logout} >Logout</button> </div></div>
        : <NavLink to={'/login'} >Login</NavLink> }
        </div>
        </header>
    )
}


export default Header;