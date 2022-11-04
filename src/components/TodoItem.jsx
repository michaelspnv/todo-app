import React, { useContext } from "react"
import TasksContext from "../contexts/TasksContext"
import styled from "styled-components"
import DeleteButton from "./DeleteButton"

const Body = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 70px;
  color: var(--main);
  padding: 0 20px;
  margin: 0 auto 20px;
  border: 1px solid var(--todo-item-border-color);
  border-radius: 10px;

  @media (max-width: 767px) {
    max-width: 80%;
  }

  @media (max-width: 400px) {
    max-width: 70%;
    height: 6 0px;
  }
`

const StateGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
`

const Number = styled.p`
  font-size: 20px;
  margin-right: 10px;

  @media (max-width: 400px) {
    font-size: 16px;
  }
`

const Checkbox = styled.input`
  width: 20px;
  height: 20px;

  @media (max-width: 400px) {
    width: 16px;
    height: 16px;
  }
`

const Title = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;

  @media (max-width: 400px) {
    font-size: 16px;
  }
`

const CrossedOutTitle = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  text-decoration: line-through;

  @media (max-width: 400px) {
    font-size: 16px;
  }
`

export default function TodoItem({ id, number, title, isCompleted }) {
  const { tasks, setTasks } = useContext(TasksContext)

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleCheckbox = (id) => [
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted
        }
        return task
      })
    ),
  ]

  return (
    <Body>
      <StateGroup>
        <Number>{number}.</Number>
        <Checkbox
          type="checkbox"
          onChange={() => toggleCheckbox(id)}
          checked={isCompleted}
        />
      </StateGroup>
      {isCompleted ? (
        <CrossedOutTitle>{title}</CrossedOutTitle>
      ) : (
        <Title>{title}</Title>
      )}
      <DeleteButton deleteTask={deleteTask} id={id} />
    </Body>
  )
}
