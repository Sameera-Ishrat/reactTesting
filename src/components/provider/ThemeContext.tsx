import React,{createContext,useState} from 'react'


export interface ThemeContextProps {
theme: string,
toggleTheme:() => void,
}

const initialThemeContext: ThemeContextProps = {
    theme: 'light',
    toggleTheme: () => {},
  };

export const ThemeContext = createContext<ThemeContextProps >(initialThemeContext);

//now let's create a ProviderContext

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {

    const [theme,setTheme] = useState<string>('light');

    const toggleTheme = () => {
        setTheme(((prevTheme) => prevTheme === 'light' ? 'dark' : 'light'));
    }
return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)
}
