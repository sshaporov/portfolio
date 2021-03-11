import React from "react"
import styles from "./Main.module.scss"
import Fade from 'react-reveal/Fade'
import ReactTypingEffect from 'react-typing-effect'

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Fade>
                    <div className={styles.greeting}>
                        <div className={styles.firstLine}>Hi there</div>
                        <div className={styles.mainLine}>I am Sergey <span className={styles.surname}>Shaporov</span></div>
                        <ReactTypingEffect className={styles.lastLine} text={'JS Developer'}/>
                    </div>

                    <div className={styles.photoContainer}>
                        <div className={styles.image}></div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Main;
