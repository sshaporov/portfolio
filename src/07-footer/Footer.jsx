import React from "react"
import styles from "./Footer.module.scss"
import {Title} from "../common/components/title/Title"
import telegramIcon from '../assets/image/icons/social/telegram.svg'
import facebookIcon from '../assets/image/icons/social/facebook.svg'
import linkedinIcon from '../assets/image/icons/social/linkedin.svg'
import githubIcon from '../assets/image/icons/social/github.svg'
import Fade from "react-reveal/Fade"

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <Title name={'Sergey Shaporov'}/>
                <Fade up>
                    <div className={styles.socialIcons}>
                        <div className={styles.socialIcon}>
                            <a href={'https://t.me/thegray13'} target="_blank">
                                <img src={telegramIcon} alt=''/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href={'https://www.facebook.com/sergei.shaporov'} target="_blank">
                                <img src={facebookIcon} alt=''/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href={'https://by.linkedin.com/in/sergshaporov/'} target="_blank">
                                <img src={linkedinIcon} alt=''/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href={'https://github.com/sshaporov'} target="_blank">
                                <img src={githubIcon} alt=''/>
                            </a>
                        </div>
                    </div>
                </Fade>
                <span className={styles.copyright}>2021 All Rights Reserved</span>
            </div>
        </div>
    );
}

export default Footer;