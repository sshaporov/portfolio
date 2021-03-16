import React, {useState} from "react"
import styles from "./Contacts.module.scss"
import {Title} from "../common/components/title/Title"
import Fade from "react-reveal/Fade"
import axios from "axios"

function Contacts() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        axios.post('http://localhost:3011/sendMessage', {name, email, message})
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
                    <div className={styles.contactsForm}>
                        <input className={styles.name} type={'text'} placeholder={'Name'} value={name} onChange={(e) => setName(e.currentTarget.value)}/>
                        <input className={styles.email} type={'text'} placeholder={'Email'} value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
                        <textarea className={styles.message} placeholder={'Message'} value={message} onChange={(e) => setMessage(e.currentTarget.value)}/>
                    </div>
                    <button type={'submit'} onClick={sendMessage}>Send message</button>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;