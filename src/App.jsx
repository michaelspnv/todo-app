import React, { useState, useEffect, useRef, useContext } from "react"
import TasksContext from "./context"
import GlobalStyles from "./globalStyles"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import Input from "./components/Input"
import AddButton from "./components/AddButton"
import TodoList from "./components/TodoList"

export default function App() {
  const { tasks, setTasks } = useContext(TasksContext)
  const [id, setId] = useState(() => {
    return tasks.length ? tasks[tasks.length - 1].id + 1 : 0
  })
  const [inputVal, setInputVal] = useState("")
  const input = useRef("input")

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (inputVal) {
      setTasks([...tasks, { id, title: inputVal }])
      setId(id + 1)
      setInputVal("")
      console.log(tasks)
    }
    input.current.focus()
  }

  const handleInputVal = (e) => setInputVal(e.target.value)

  return (
    <Wrapper>
      <GlobalStyles />
      <Title />
      <Input onChange={handleInputVal} value={inputVal} input={input} />
      <AddButton onClick={addTask} />
      <TodoList tasks={tasks} />
    </Wrapper>
  )
}
