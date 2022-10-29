import React, { useContext } from "react"
import TasksContext from "../context"
import styled from "styled-components"
import DeleteButton from "./DeleteButton"

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 70px;
  color: rgba(255, 255, 255, 0.9);
  padding: 0 20px;
  margin-bottom: 20px;
  border: 1px solid #666;
  border-radius: 10px;
`

const Number = styled.p`
  font-size: 20px;
`

const Title = styled.p`
  font-size: 16px;
`

const ControlPanel = styled.div`
  display: flex;
`

const MoveButton = styled.span``

export default function TodoItem({ id, number, title }) {
  const { tasks, setTasks } = useContext(TasksContext)

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <Body>
      <Number>{number}.</Number>
      <Title>{title}</Title>
      <ControlPanel>
        <DeleteButton deleteTask={() => deleteTask(id)} />
        <MoveButton>...</MoveButton>
      </ControlPanel>
    </Body>
  )
}
