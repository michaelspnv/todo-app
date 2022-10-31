import React, { useState, useEffect } from "react"
import ThemeContext from "../contexts/ThemeContext"

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem("theme")

    return currentTheme ? currentTheme : "light"
  })

  useEffect(() => {
    document.querySelector(".page").dataset.theme = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
