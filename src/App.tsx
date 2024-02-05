import React,{useState} from "react";
import Application from "./components/application/Application";
import Skills from "./components/skills/Skills";
import Counter from "./components/counter/Counter";
import ThemedComponent from "./components/provider/ThemedComponent";
import { ThemeProvider } from "./components/provider/ThemeContext";


function App() {
 const skills = ["html", "json", "javascript", "rect", "css"];
  return (
    <ThemeProvider>
    <div className="App">
      <Application />
      <Skills skills={skills} />
      <Counter />   
      <ThemedComponent />
      
    </div>
    </ThemeProvider>
  );
}

export default App;
