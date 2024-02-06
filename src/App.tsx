import React,{useState} from "react";
import Application from "./components/application/Application";
import Skills from "./components/skills/Skills";
import Counter from "./components/counter/Counter";
import ThemedComponent from "./components/provider/ThemedComponent";
import { ThemeProvider } from "./components/provider/ThemeContext";
import Counter2 from "./components/hooks/useCounter/Counter2";


function App() {
 const skills = ["html", "json", "javascript", "rect", "css"];
  return (
    <ThemeProvider>
    <div className="App">
      <Application />
      <Skills skills={skills} />
      <Counter />   
      <ThemedComponent />
      <Counter2 />
    </div>
    </ThemeProvider>
  );
}

export default App;
