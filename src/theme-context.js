import { createContext, useCallback, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material'

export const ThemeContext = createContext('default value')

const themes = {
  dark: {
    color: '#000',
    name: 'Темная',
  },
  light: {
    color: '#fff',
    name: 'Светлая',
  },
}

const themesMUI = {
  dark: createTheme({
    myPalette: {
      color: '000',
    },
    palette: {},
  }),
  light: createTheme({
    myPalette: {
      color: 'fff',
    },
    palette: {},
  }),
}

export const CustomThemeProvider = ({ children, initialTheme = 'light' }) => {
  const [theme, setTheme] = useState({
    theme: themes[initialTheme],
    name: initialTheme,
  })

  const themeSetter = useCallback((name) => {
    if (!!themes[name]) {
      setTheme({
        name,
        theme: themes[name],
      })
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, themeSetter }}>
      <ThemeProvider theme={themesMUI[theme.name]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
