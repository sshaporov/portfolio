import React from "react"
import styles from "./Skills.module.scss"
import stylesContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styles.skillsContainer} ${stylesContainer.container}`}>
                <Title name={'Skills'}/>
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
