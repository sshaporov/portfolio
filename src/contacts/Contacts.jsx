import React from "react"
import styles from "./Contacts.module.scss"
import stylesContainer from "../common/styles/Container.module.css"
import {Title} from "../common/components/title/Title"

function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styles.contactsContainer} ${stylesContainer.container}`}>
                <Title name={'Contacts'}/>
                <form className={styles.contactsForm}>
                    <input type={'text'}/>
                    <input type={'text'}/>
                    <textarea/>
                    <button type={'submit'} className={styles.button}>Отправить</button>
                </form>
                {/*<Button name={'Отправить'}/>*/}
            </div>
        </div>
    );
}

export default Contacts;