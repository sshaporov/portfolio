import React from "react"
import styles from "./Skill.module.scss"

function Skill(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <div className={styles.title}>{props.title}</div>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Skill;
