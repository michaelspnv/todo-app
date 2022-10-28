import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import TasksContext from "./context"

function Main() {
  const [tasks, setTasks] = useState([])

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      <App />
    </TasksContext.Provider>
  )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"))
rootElement.render(<Main />)
