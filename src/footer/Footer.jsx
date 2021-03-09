import React from "react"
import styles from "./Footer.module.scss"
import stylesContainer from "../common/styles/Container.module.css"
import {Title} from "../common/components/title/Title";

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styles.footerContainer} ${stylesContainer.container}`}>
                <Title name={'Sergey Shaporov'}/>
                <div className={styles.socialContainer}>
                    <div className={styles.social}></div>
                    <div className={styles.social}></div>
                    <div className={styles.social}></div>
                    <div className={styles.social}></div>
                </div>
                <span>Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;