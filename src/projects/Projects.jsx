import React from "react"
import styles from "./Projects.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import Project from "./project/Project"
import {Title} from "../common/components/title/Title"

function Projects() {
    const socialImgStyles = {
        backgroundImage: 'url(' + imgUrl + ')'
    }
    const todoImgStyles = {
        backgroundImage: 'url(' + imgUrl + ')'
    }

    return (
        <div className={styles.projectsBlock}>
            <div className={`${styles.projectsContainer} ${stylesContainer.container}`}>
                <Title name={'Projects'}/>
                <div className={styles.projects}>
                    <Project title={'Social Network'} description={'Project description description description description description description description description description description description description description'}/>
                    <Project title={'Todo list'} description={'Project description description description description description description description description description description description description description description description description'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
