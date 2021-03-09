import styles from "./Title.module.scss"
import React from "react"

export const Title = (props) => {
    return (
        <div className={styles.title}>
            <div>{props.name}</div>
        </div>
    )
}