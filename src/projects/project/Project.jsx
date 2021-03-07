import React from "react"
import styles from "./Project.module.css"

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.imgContainer}>
                {/*<img className={styles.projectImg}/>*/}
                <a className={styles.button}>Посмотреть</a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{props.title}</h3>
                <span className={styles.projectDescription}>
                    {props.description}
                </span>
            </div>
        </div>
    );
}

export default Project;
