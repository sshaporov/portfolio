import React, {useState} from "react"
import styles from "./Contacts.module.scss"
import {Title} from "../common/components/title/Title"
import Fade from "react-reveal/Fade"
import axios from "axios"
import {checkEmail, checkLength, checkRequired} from "../utils/validators";

function Contacts() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [messageError, setMessageError] = useState('')

    const sendMessage = () => {
        axios.post('https://my-smtp-server-nodejs.herokuapp.com/sendMessage', {name, email, message})
            .then(function (response) {
                console.log(response);
                setName('')
                setEmail('')
                setMessage('')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onChangeName = (e) => {
        setName(e.currentTarget.value)
        setNameError('')
    }

    const onChangeEmail = (e) => {
        setEmail(e.currentTarget.value)
        setEmailError('')
    }

    const onChangeMessage = (e) => {
        setMessage(e.currentTarget.value)
        setMessageError('')
    }

    const onClickSendMessage = () => {
        !checkLength(name, 2) && setNameError('Too short. Need more then 3 symbols')
        !checkLength(message, 3) && setMessageError('Too short. Need more then 3 symbols')
        !checkEmail(email) && setEmailError('Enter correct email')
        !checkRequired(name) && setNameError('Required')
        !checkRequired(email) && setEmailError('Required')
        !checkRequired(message) && setMessageError('Required')

        checkRequired(name)
        && checkRequired(email)
        && checkRequired(message)
        && checkLength(name, 3)
        && checkLength(message, 3)
        && checkEmail(email)
        && sendMessage()
    }

    return (
        <div id={'contacts'} className={styles.contacts}>
            <div className={styles.container}>
                <Title name={'Contacts'}/>
                <Fade >
                    <div className={styles.contactsForm}>
                        <input className={styles.name}
                               type={'text'} placeholder={'Name'}
                               value={name}
                               onChange={onChangeName}
                        />
                        <div className={styles.errorMessage}>{nameError}</div>
                        <input className={styles.email}
                               type={'text'}
                               placeholder={'Email'}
                               value={email}
                               onChange={onChangeEmail}/>
                        <div className={styles.errorMessage}>{emailError}</div>
                        <textarea className={styles.message}
                                  placeholder={'Message'}
                                  value={message}
                                  onChange={onChangeMessage}
                        />
                        <div className={styles.errorMessage}>{messageError}</div>
                    </div>
                    <button type={'submit'} onClick={onClickSendMessage}>Send message</button>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;