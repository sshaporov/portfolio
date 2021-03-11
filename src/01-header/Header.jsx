import React from "react"
import styles from "./Header.module.scss"
import Nav from "./nav/Nav";
import Burger from "./burger/Burger";

function Header(props) {
    return (
        <div className={styles.header}>
            <Nav/>
            <Burger
                isOpened={props.burgerIsOpened}
                onBurgerBtnClick={props.onBurgerBtnClick}
            />
        </div>
    );
}

export default Header;
