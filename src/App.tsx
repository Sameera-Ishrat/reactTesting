import React,{useState} from "react";
import Application from "./components/application/Application";
import Skills from "./components/skills/Skills";
import Counter from "./components/counter/Counter";


function App() {
 const skills = ["html", "json", "javascript", "rect", "css"];
  return (
    <div className="App">
      <Application />
      <Skills skills={skills} />
      <Counter />
    </div>
  );
}

export default App;
