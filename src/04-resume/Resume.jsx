import React from "react"
import styles from "./Resume.module.scss"
import {Title} from "../common/components/title/Title"

function Resume() {
    return (
        <div className={styles.resume}>
            <div className={styles.container}>
                <div className={styles.timelineContent}>
                    <Title name={'Resume'}/>
                    <ul className={styles.timeline}>
                        <li className={styles.event} data-date="2012">
                            <h3>Mostra Group</h3>
                            <p>QA Engineer </p>
                        </li>
                        <li className={styles.event} data-date="2013">
                            <h3>Qulix Systems</h3>
                            <p>Senior QA Engineer</p>
                        </li>
                        <li className={styles.event} data-date="2018">
                            <h3>Godel Technologies</h3>
                            <p>Senior QA Engineer</p>
                        </li>
                        <li className={styles.event} data-date="2020">
                            <h3>Godel Technologies</h3>
                            <p>JS Developer</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Resume;
