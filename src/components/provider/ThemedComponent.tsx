import React,{useContext} from 'react';
import { ThemeProvider, ThemeContextProps } from './ThemeContext';
import { ThemeContext } from './ThemeContext';

const ThemedComponent:React.FC =() => {

    const {theme,toggleTheme} = useContext<ThemeContextProps>(ThemeContext);

  return (
    <div className={`themed-component ${theme}`}>
 <p data-testid="theme">{theme}</p>
<button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ThemedComponent