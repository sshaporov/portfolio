import React from "react"
import styles from "./Projects.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import Project from "./project/Project";

function Projects() {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styles.projectsContainer} ${stylesContainer.container}`}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    <Project title={'Social Network'} description={'Project description'}/>
                    <Project title={'Todo list'} description={'Project description'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
