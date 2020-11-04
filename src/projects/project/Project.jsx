import React from "react"
import styles from "./Project.module.css"
import Button from "../../common/components/button/Button";

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.imgContainer}>
                <img className={styles.projectImg}/>
                <a className={styles.button}>Посмотреть</a>
            </div>
            <div className={styles.title}>{props.title}</div>
            <span className={styles.description}>
                {props.description}
            </span>
        </div>
    );
}

export default Project;
