import React from "react"
import styles from "./Skills.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styles.skillsContainer} ${stylesContainer.container}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'JS'} description={'asf asd fasjdfasd fasdfasdfasd fasd fasdf asdfasdfasdf asdfasdfasdf sadfsadf'}/>
                    <Skill title={'CSS'} description={'asf sadfaskdfbaskdf asd fasjdfasd fasdfasdfasd fasd fasdf asdfasdfasdf asdfasdfasdf sadfsadf'}/>
                    <Skill title={'REACT'} description={'asf sadfaskdfbaskdf asd fasjdfasd fasdfasdfasd fasd fasdf asdfasdfasdf asdfasdfasdf sadfsadf'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
