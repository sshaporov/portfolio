import React from "react"
import styles from "./Burger.module.scss"
import {Link} from 'react-scroll'
import burger from './../../assets/image/icons/burger.svg'
import close from './../../assets/image/icons/close.svg'


function Burger(props) {

    const onBurgerBtnClick = () => {
        props.onBurgerBtnClick(!props.isOpened)
    }

    return (
        <div className={styles.burger}>
            <div className={props.isOpened ? `${styles.burgerItems} ${styles.show}` : styles.burgerItems}>
                <Link to="skills"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                >Skills</Link>

                <Link to="resume"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                >Resume</Link>

                <Link to="projects"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                >Projects</Link>

                <Link to="contacts"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                >Contacts</Link>
            </div>
            <div onClick={onBurgerBtnClick} className={styles.burgerBtn}>
                <img src={props.isOpened ? close : burger}/>
            </div>
        </div>
    );
}

export default Burger;
