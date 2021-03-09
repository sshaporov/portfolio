import React from "react"
import styles from "./Main.module.scss"
import stylesContainer from "./../common/styles/Container.module.css"

function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.text}>
                    <span>Hi there</span>
                    <h1>I am Sergey Shaporov</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
}

export default Main;
