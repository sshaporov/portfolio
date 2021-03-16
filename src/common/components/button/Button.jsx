import React from "react"
import styles from "./Button.module.scss"

function Button(props) {
    return (
        <a
            className={styles.btn}
            href="https://github.com/sshaporov/CV/raw/master/myCV.pdf"
            download={props.isDownload}
        >
            {props.name}
        </a>
    );
}

export default Button;
