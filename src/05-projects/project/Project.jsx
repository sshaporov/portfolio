import React from "react"
import styles from "./Project.module.scss"
import Button from "../../common/components/button/Button";

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.imgContainer} style={props.style}>
                <Button name={'View project'}/>
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
