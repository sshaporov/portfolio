import React from "react"
import styles from "./Contacts.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import Button from "../common/components/button/Button";

function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styles.contactsContainer} ${stylesContainer.container}`}>
                <h2 className={styles.title}>Contacts</h2>
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