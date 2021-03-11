import React from "react"
import styles from "./Header.module.scss"
import Nav from "./nav/Nav";
import Burger from "./burger/Burger";

function Header() {
    return (
        <div className={styles.header}>
            <Nav/>
            <Burger/>
        </div>
    );
}

export default Header;
