import React, { createContext, useState } from 'react'
import { themeData } from '../theme/Theme'

export const ThemeContext = createContext()
const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(themeData.lightTheme)

  const themeHandler = () => {
    setTheme(
      theme === themeData.lightTheme
        ? themeData.darkTheme
        : themeData.lightTheme
    )
  }
  const value = { theme, themeHandler }
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
