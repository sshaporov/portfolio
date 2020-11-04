import React from "react"
import styles from "./Footer.module.css"
import stylesContainer from "../common/styles/Container.module.css"

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styles.footerContainer} ${stylesContainer.container}`}>
                <h2 className={styles.title}>Sergey Shaporov</h2>
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