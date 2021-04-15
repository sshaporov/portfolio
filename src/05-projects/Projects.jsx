import React from "react"
import styles from "./Projects.module.scss"
import Project from "./project/Project"
import {Title} from "../common/components/title/Title"
import todoImg from '../assets/image/todo.jpeg'
import auth1Img from '../assets/image/auth1.jpeg'
import auth2Img from '../assets/image/auth2.jpeg'
import chatImg from '../assets/image/chat.png'
import Fade from "react-reveal/Fade";

function Projects() {
    const auth1ImgStyles = {
        backgroundImage: 'url(' + auth1Img + ')'
    }
    const auth2ImgStyles = {
        backgroundImage: 'url(' + auth2Img + ')'
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
                            title={'JWT authentication v1.0'}
                            description={'This is a simple implementation jwt authentication on NodeJS using only access token. Technology stack: nodeJS, express, mongoDB'}
                            style={auth1ImgStyles}
                            link={'https://github.com/sshaporov/auth-jwt'}
                        />
                        <Project
                            title={'JWT authentication v2.0'}
                            description={'This is an implementation jwt authentication on NodeJS using access and refresh tokens. Technology stack: nodeJS, express, mongoDB, redis'}
                            style={auth2ImgStyles}
                            link={'https://github.com/sshaporov/auth-jwts'}
                        />
                        <Project
                            title={'Todo list'}
                            description={'This app allows to keep to-do lists. Here is implemented JWS token authentication. I used Ant Design lib for implementing this solution. Technology stack: MERN'}
                            style={todoImgStyles}
                            link={'https://sshaporov.github.io/mytasks-frontend/'}
                        />
                        <Project
                            title={'Chat'}
                            description={'This Web chat app. I used react-chat-engine npm package and implemented Chat feed section. Technology stack: React'}
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
