import React from "react"
import styles from "./Button.module.scss"

function Button(props) {
    return (
        <a className={styles.button}>
            {props.name}
        </a>
    );
}

export default Button;
