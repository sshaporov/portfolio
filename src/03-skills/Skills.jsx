import React from "react"
import styles from "./Skills.module.scss"
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <Title name={'Skills'}/>
                <div className={styles.skillsList}>
                        <Skill title={'JavaScript'}/>
                        <Skill title={'ReactJS'}/>
                        <Skill title={'Redux'}/>
                        <Skill title={'NodeJS'}/>
                        <Skill title={'Express'}/>
                        <Skill title={'MongoDB'}/>
                        <Skill title={'HTML'}/>
                        <Skill title={'CSS'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
