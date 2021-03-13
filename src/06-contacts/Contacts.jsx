import React from "react"
import styles from "./Contacts.module.scss"
import {Title} from "../common/components/title/Title"
import Fade from "react-reveal/Fade"
import axios from "axios"

function Contacts() {
    const sendMessage = () => {

        axios.get('http://localhost:3011/test/')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div id={'contacts'} className={styles.contacts}>
            <div className={styles.container}>
                <Title name={'Contacts'}/>
                <Fade >
                    <form className={styles.contactsForm}>
                        <input className={styles.name} type={'text'} placeholder={'Name'}/>
                        <input className={styles.email} type={'text'} placeholder={'Email'}/>
                        <textarea className={styles.message} placeholder={'Message'}/>
                        {/*<button onClick={sendMessage} type={'submit'}>Send message</button>*/}
                    </form>
                    <button onClick={sendMessage}>Send message</button>

                </Fade>
            </div>
        </div>
    );
}

export default Contacts;