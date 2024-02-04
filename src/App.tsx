import React,{useState} from "react";
import Application from "./components/application/Application";
import Skills from "./components/skills/Skills";


function App() {
 const skills = ["html", "json", "javascript", "rect", "css"];
  return (
    <div className="App">
      <Application />
      <Skills skills={skills} />
    </div>
  );
}

export default App;
