import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode)
    }

    return  <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                 {children}
            </DarkModeContext.Provider>
}

function updateDarkMode(darkMode){
    if(darkMode){
        document.documentElement.classList.add('dark');
    } else{
        document.documentElement.classList.remove('dark');
    }
}

export const useDarkMode = () => useContext(DarkModeContext);
// const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
//^ dark모드 해야하는 곳에서 이렇게 해야하는데 darkmodecontenext를 사용해야한다고 
//일일이 알고있어야 하는게 아니라 내부적으로 useContext(DarkModeContext)을 할수있도록 hook을만들어줌