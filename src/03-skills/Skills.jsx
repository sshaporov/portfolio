import React from "react"
import styles from "./Skills.module.scss"
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import Fade from "react-reveal/Fade";
import js from "../assets/image/icons/skills/js.svg"
import react from "../assets/image/icons/skills/react.svg"
import redux from "../assets/image/icons/skills/redux.svg"
import node from "../assets/image/icons/skills/node.svg"
import express from "../assets/image/icons/skills/express.svg"
import mongodb from "../assets/image/icons/skills/mongodb.svg"
import html from "../assets/image/icons/skills/html_color.svg"
import css from "../assets/image/icons/skills/css_color.svg"



function Skills() {
    return (
        <div id={'skills'} className={styles.skills}>
            <div className={styles.container}>
                <Title name={'Skills'}/>
                <Fade>
                    <div className={styles.skillsList}>
                        <Skill title={'JavaScript'} icon={js}/>
                        <Skill title={'ReactJS'} icon={react}/>
                        <Skill title={'Redux'} icon={redux}/>
                        <Skill title={'NodeJS'} icon={node}/>
                        <Skill title={'Express'} icon={express}/>
                        <Skill title={'MongoDB'} icon={mongodb}/>
                        <Skill title={'HTML'} icon={html}/>
                        <Skill title={'CSS'} icon={css}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Skills;
