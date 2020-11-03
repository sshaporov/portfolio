import React from "react"
import styles from "./Button.module.css"

function Button(props) {
    return (
        <a className={styles.button}>
            {props.name}
        </a>
    );
}

export default Button;
