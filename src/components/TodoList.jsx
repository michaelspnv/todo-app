import React from "react"
import styled from "styled-components"
import TodoItem from "./TodoItem"

const Body = styled.div`
  width: 100%;
`

const EmptyList = styled.p`
  font-size: 30px;
  margin: 0;
  color: var(--main);

  @media (max-width: 400px) {
    font-size: 20px;
  }
`

export default function TodoList({ tasks }) {
  return (
    <Body>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TodoItem
            key={task.id}
            id={task.id}
            number={index + 1}
            title={task.title}
            isCompleted={task.isCompleted}
          />
        ))
      ) : (
        <EmptyList>Список пуст.</EmptyList>
      )}
    </Body>
  )
}
