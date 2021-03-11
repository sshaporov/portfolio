import React from "react"
import styles from "./Projects.module.scss"
import Project from "./project/Project"
import {Title} from "../common/components/title/Title"
import todoImg from '../assets/image/todo.png'
import quizImg from '../assets/image/quiz.png'
import Fade from "react-reveal/Fade";

function Projects() {
    const quizImgStyles = {
        backgroundImage: 'url(' + quizImg + ')'
    }
    const todoImgStyles = {
        backgroundImage: 'url(' + todoImg + ')'
    }

    return (
        <div id={'projects'} className={styles.projects}>
            <div className={styles.container}>
                <Title name={'Projects'}/>
                <Fade>
                    <div className={styles.projectslist}>
                        <Project
                            title={'Quiz'}
                            description={'Project description description description description description description description description description description description description description'}
                            style={quizImgStyles}
                        />
                        <Project
                            title={'Todo list'}
                            description={'Project description description description description description description description description description description description description description description description description'}
                            style={todoImgStyles}
                        />
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Projects;
