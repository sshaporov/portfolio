import React from "react"
import styles from "./Main.module.scss"

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.mainContainer}>
                <div className={styles.greetingBlock}>
                    <div className={styles.firstLine}>Hi there</div>
                    <div className={styles.mainLine}>I am Sergey <span className={styles.surname}>Shaporov</span></div>
                    <div className={styles.lastLine}>JS Developer</div>
                </div>
                <div className={styles.photoContainer}>
                    <div className={styles.image}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
