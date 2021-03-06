import styles from "./Title.module.css"
import React from "react"

export const Title = (props) => {
    return (
        <div className={styles.title}>
            <h2>{props.name}</h2>
        </div>
    )
}