import React from "react"
import styles from "./Skills.module.scss"
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <Title name={'Skills'}/>
                <div className={styles.skills}>
                    <Skill title={'JavaScript'} description={'asf asd fasjdfasd fasdfasdfasd fasd fasdf asdfasdfasdf asdfasdfasdf sadfsadf'}/>
                    <Skill title={'ReactJS'} description={'asf sadfaskdfbaskdf asd fasjdfasd fasdfasdfasd fasd fasdf asdfasdfasdf asdfasdfasdf sadfsadf'}/>
                    <Skill title={'NodeJS'} description={'asf sadfaskdfbaskdf asd fasjdfasd fasdfasdfasd fasd fasdf asdfasdfasdf asdfasdfasdf sadfsadf'}/>
                    <Skill title={'Express'} description={'asf sadfaskdfbaskdf asd fasjdfasd fasdfasdfasd fasd fasdf asdfasdfasdf asdfasdfasdf sadfsadf'}/>
                    <Skill title={'MongoDB'} description={'asf sadfaskdfbaskdf asd fasjdfasd fasdfasdfasd fasd fasdf asdfasdfasdf asdfasdfasdf sadfsadf'}/>
                    <Skill title={'CSS/HTML'} description={'asf sadfaskdfbaskdf asd fasjdfasd fasdfasdfasd fasd fasdf asdfasdfasdf asdfasdfasdf sadfsadf'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
