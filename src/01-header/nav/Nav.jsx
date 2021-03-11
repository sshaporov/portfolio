import React from "react"
import styles from "./Nav.module.scss"
import {Link, animateScroll as scroll} from 'react-scroll'


function Nav() {
    return (
        <div className={styles.nav}>

            <a href=''>Main</a>

            <Link to="skills"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
            >Skills</Link>

            <Link to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
            >Projects</Link>

            <Link to="resume"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
            >Resume</Link>

            <Link to="contacts"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
            >Contacts</Link>

        </div>
    );
}

export default Nav;
