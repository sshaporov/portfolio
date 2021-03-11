import React, {useState} from "react";
import Header from "./01-header/Header";
import Main from "./02-main/Main";
import Skills from "./03-skills/Skills";
import Projects from "./05-projects/Projects";
import Contacts from "./06-contacts/Contacts";
import Footer from "./07-footer/Footer";
import Resume from "./04-resume/Resume";

function App() {
    const [burgerIsOpened, setBurgerIsOpened] = useState(false)
    const onBurgerBtnClick = () => {
        setBurgerIsOpened(!burgerIsOpened)
    }
    return (
    <div className="App">
      <Header burgerIsOpened={burgerIsOpened} onBurgerBtnClick={onBurgerBtnClick}/>
      <Main burgerIsOpened={burgerIsOpened}/>
      <Skills/>
      <Resume/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
