import React from "react"
import styles from "./Footer.module.scss"
import {Title} from "../common/components/title/Title";
import telegramIcon from './../assets/image/icons/telegram.svg'
import facebookIcon from './../assets/image/icons/facebook.svg'
import linkedinIcon from './../assets/image/icons/linkedin.svg'
import githubIcon from './../assets/image/icons/github.svg'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <Title name={'Sergey Shaporov'}/>
                <div className={styles.socialIcons}>
                    <div className={styles.socialIcon}>
                        <a>
                            <img src={telegramIcon} alt=''/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a>
                            <img src={facebookIcon} alt=''/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a>
                            <img src={linkedinIcon} alt=''/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a>
                            <img src={githubIcon} alt=''/>
                        </a>
                    </div>
                </div>
                <span className={styles.copyright}>2021 All Rights Reserved</span>
            </div>
        </div>
    );
}

export default Footer;