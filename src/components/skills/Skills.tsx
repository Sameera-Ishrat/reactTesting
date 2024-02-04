import React,{useState,useEffect} from 'react'
import { SkillsProps } from './Skills.types';

const Skills = ({skills} : SkillsProps) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);

useEffect(() => {
setTimeout(() => {
setIsLoggedIn(true)
},1001) 
},[])

  return (
    <div>
    <ul>
   {skills.map((skill,index) => (
    <li key={index}>{skill}</li>
   ))}
    </ul>
 
{isLoggedIn ? (
    <button>Start Learning</button>
) : (
<button onClick={() => setIsLoggedIn(true)}>Login</button>
)}

</div>
  )
}

export default Skills