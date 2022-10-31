import React from "react"
import ReactDOM from "react-dom/client"
import TasksProvider from "./providers/TasksProvider"
import ThemeProvider from "./providers/ThemeProvider"
import App from "./App"

function Main() {
  return (
    <TasksProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TasksProvider>
  )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"))
rootElement.render(<Main />)
