import React from "react"
import styles from "./Nav.module.scss"

function Nav() {
    return (
        <div className={styles.nav}>
            <a href=''>Main</a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''>Resume</a>
            <a href=''>Contacts</a>
        </div>
    );
}

export default Nav;
