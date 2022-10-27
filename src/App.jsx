import React, { useState, useRef } from 'react'
import GlobalStyles from './globalStyles'
import Wrapper from './components/Wrapper'
import Title from './components/Title'
import Input from './components/Input'
import AddButton from './components/AddButton'
import TodoList from './components/TodoList'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [inputVal, setInputVal] = useState('')
  const input = useRef('input')

  const addTask = () => {
    setTasks([...tasks, {number: tasks.length + 1, title: inputVal}])
    setInputVal('')
    input.current.focus()
  }

  // const deleteTask = (number) => {
  //   setTasks([])
  // }

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
