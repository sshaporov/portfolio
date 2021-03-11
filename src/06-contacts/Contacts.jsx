import React from "react"
import styles from "./Contacts.module.scss"
import {Title} from "../common/components/title/Title"
import Fade from "react-reveal/Fade";

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <Title name={'Contacts'}/>
                <Fade >
                    <form className={styles.contactsForm}>
                        <input className={styles.name} type={'text'} placeholder={'Name'}/>
                        <input className={styles.email} type={'text'} placeholder={'Email'}/>
                        <textarea className={styles.message} placeholder={'Message'}/>
                        <button type={'submit'}>Send message</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;