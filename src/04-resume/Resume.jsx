import React from "react"
import styles from "./Resume.module.scss"
import {Title} from "../common/components/title/Title"

function Resume() {
    return (
        <div className={styles.resume}>
            <div className={styles.container}>
                <Title name={'Resume'}/>

            </div>
        </div>
    );
}

export default Resume;
