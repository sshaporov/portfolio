import React from "react"
import styles from "./Project.module.css"

function Project(props) {
    return (
        <div className={styles.project}>
            <img className={styles.projectLogo} src={"#"} alt={"project logo"}/>
            <div className={styles.title}>{props.title}</div>
            <span className={styles.description}>
                {props.description}
            </span>
        </div>
    );
}

export default Project;
