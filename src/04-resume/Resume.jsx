import React from "react"
import styles from "./Resume.module.scss"
import stylesContainer from "../common/styles/Container.module.css"
import {Title} from "../common/components/title/Title"

function Resume() {
    return (
        <div className={styles.resumeBlock}>
            <div className={`${styles.resumeContainer} ${stylesContainer.container}`}>
                <Title name={'Resume'}/>

            </div>
        </div>
    );
}

export default Resume;
