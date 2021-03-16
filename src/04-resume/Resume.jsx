import React from "react"
import styles from "./Resume.module.scss"
import {Title} from "../common/components/title/Title"
import Button from "../common/components/button/Button";
import Fade from "react-reveal/Fade";

function Resume() {
    return (
        <div id={'resume'} className={styles.resume}>
            <div className={styles.container}>
                <Title name={'Resume'}/>
                <Fade>
                    <ul className={styles.timeline}>
                        <li className={styles.event} data-date="2012">
                            <h3>Mostra Group</h3>
                            <p>QA Engineer </p>
                            <span>Functional testing Web and Desktop applications. Manual testing API. Testing custom data transfer protocols. Test docs creation: test plans, check lists, test cases. Smoke and Regression testing. Defects validation. Present Demo to customer staff.</span>
                        </li>
                        <li className={styles.event} data-date="2013">
                            <h3>Qulix Systems</h3>
                            <p>Senior QA Engineer</p>
                            <span>Functional testing Web and Mobile application (iOS, Android). Manual testing SOAP / REST API. Testing custom data transfer protocols. Test docs creation: test plans, check lists, test cases. Data logging testing (server and cloud logs). Defects validation. Smoke and Regression testing.</span>
                        </li>
                        <li className={styles.event} data-date="2018">
                            <h3>Godel Technologies</h3>
                            <p>Senior QA Engineer</p>
                            <span>Set up QA process. QA team management (QA team - 4 members). Functional testing Web application. Automated and manual API testing. Multi-platform testing Web application. Data storage testing in the database. Data logging testing. Smoke and Regression testing. Test docs creation: test strategy, check lists, test cases, test scenarios. Defect validation. Mentoring newcomers.</span>
                        </li>
                        <li className={styles.event} data-date="2020">
                            <h3>Godel Technologies</h3>
                            <p>JS Developer</p>
                            <span>Development of new features (React / Redux). Bug fixing. User interface development using UI libs (Ant Design / Material UI). Refactoring code. Code coverage with Unit tests (Jest)</span>
                        </li>
                    </ul>
                    <Button name={'Download CV'} isDownload/>
                </Fade>
            </div>
        </div>
    );
}

export default Resume;
