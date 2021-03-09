import React from "react"
import styles from "./Contacts.module.scss"
import stylesContainer from "../common/styles/Container.module.css"
import {Title} from "../common/components/title/Title"
import Button from "../common/components/button/Button"

function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styles.contactsContainer} ${stylesContainer.container}`}>
                <Title name={'Contacts'}/>
                <form className={styles.contactsForm}>
                    <input className={styles.name} type={'text'} placeholder={'Name'}/>
                    <input className={styles.email} type={'text'} placeholder={'Email'}/>
                    <textarea className={styles.message} placeholder={'Message'}/>
                    <button type={'submit'}>Send message</button>
                    {/*<Button name={'Send message'}/>*/}
                </form>
            </div>
        </div>
    );
}

export default Contacts;