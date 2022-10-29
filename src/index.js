import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import TasksContext from "./contexts/TasksContext"
import ThemeContext from "./contexts/ThemeContext"

function Main() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")

    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem("theme")

    return currentTheme ? currentTheme : "light"
  })

  useEffect(() => {
    document.querySelector(".page").dataset.theme = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <App />
      </ThemeContext.Provider>
    </TasksContext.Provider>
  )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"))
rootElement.render(<Main />)
