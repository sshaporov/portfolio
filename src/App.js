import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import Resume from "./resume/Resume";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Resume/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
