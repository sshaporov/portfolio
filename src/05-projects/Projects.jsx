import React from "react"
import styles from "./Projects.module.scss"
import Project from "./project/Project"
import {Title} from "../common/components/title/Title"
import todoImg from '../assets/image/todo.jpeg'
import quizImg from '../assets/image/quiz.jpg'
import chatImg from '../assets/image/chat.png'
import Fade from "react-reveal/Fade";

function Projects() {
    const quizImgStyles = {
        backgroundImage: 'url(' + quizImg + ')'
    }
    const todoImgStyles = {
        backgroundImage: 'url(' + todoImg + ')'
    }
    const chatImgStyles = {
        backgroundImage: 'url(' + chatImg + ')'
    }

    return (
        <div id={'projects'} className={styles.projects}>
            <div className={styles.container}>
                <Title name={'Projects'}/>
                <Fade>
                    <div className={styles.projectslist}>
                        <Project
                            title={'Quiz'}
                            description={'This is a quiz app. Which allows to configure the game with any number of question cards. There is also a logic for displaying questions, which takes into account the frequency of display and the rating of the questions. Technology stack: MERN'}
                            style={quizImgStyles}
                            link={'https://sshaporov.github.io/friday/'}
                        />
                        <Project
                            title={'Todo list'}
                            description={'This app allows to keep to-do lists. Here is implemented JWS token authentication. I used Ant Design lib for implementing this solution. Technology stack: MERN'}
                            style={todoImgStyles}
                            link={'https://sshaporov.github.io/mytasks-frontend/'}
                        />
                        <Project
                            title={'Chat'}
                            description={'This Web chat app. I used . I used react-chat-engine application and implemented Chat feed section. Technology stack: React'}
                            style={chatImgStyles}
                            link={'https://sshaporov.github.io/my-chat/'}
                        />
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Projects;
