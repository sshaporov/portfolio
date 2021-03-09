import React from "react"
import styles from "./Main.module.scss"
import stylesContainer from "./../common/styles/Container.module.css"

function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.text}>
                    <div className={styles.firstLine}>Hi there</div>
                    <div className={styles.mainLine}>I am Sergey Shaporov</div>
                    <div className={styles.lastLine}>JS Developer</div>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
}

export default Main;
