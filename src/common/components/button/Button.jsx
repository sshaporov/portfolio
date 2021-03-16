import React from "react"
import styles from "./Button.module.scss"

function Button(props) {
    return (
        <a
            className={styles.btn}
            href={props.href}
        >
            {props.name}
        </a>
    );
}

export default Button;
