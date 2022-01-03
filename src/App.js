
import React, { useState } from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import ClassContextComponent from './ClassContextComponent'

//Context is passing props all the way  down to the children component
//Content is global state for all of the provider

export const ThemeContext = React.createContext()

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(PrevDarkTheme => !PrevDarkTheme)
  }

  return (
    <React.Fragment>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </React.Fragment>
  );
}



