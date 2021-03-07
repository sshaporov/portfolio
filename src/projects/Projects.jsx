import React from "react"
import styles from "./Projects.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import Project from "./project/Project"
import {Title} from "../common/components/title/Title"
import todoImg from '../assets/image/todo.png'
import quizImg from '../assets/image/quiz.png'

function Projects() {
    const quizImgStyles = {
        backgroundImage: 'url(' + quizImg + ')'
    }
    const todoImgStyles = {
        backgroundImage: 'url(' + todoImg + ')'
    }

    return (
        <div className={styles.projectsBlock}>
            <div className={`${styles.projectsContainer} ${stylesContainer.container}`}>
                <Title name={'Projects'}/>
                <div className={styles.projects}>
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
            </div>
        </div>
    );
}

export default Projects;
