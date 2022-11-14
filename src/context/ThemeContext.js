import React, { createContext, useState } from 'react'
import { themeData } from '../theme/Theme'

export const ThemeContext = createContext()
const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(themeData.lightTheme)

  const themeHandler = (theme) => {
    switch (theme) {
      case 'dark':
        setTheme(themeData.darkTheme)
        break
      case 'blueThemeDark':
        setTheme(themeData.lightTheme)
        break
      default:
        setTheme(themeData.lightTheme)
        break
    }
  }
  const value = { theme, themeHandler }
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
