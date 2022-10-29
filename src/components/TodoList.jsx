import React from "react"
import styled from "styled-components"
import TodoItem from "./TodoItem"

const Body = styled.div`
  width: 100%;
`

const EmptyList = styled.p`
  font-size: 30px;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
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
          />
        ))
      ) : (
        <EmptyList>Список пуст.</EmptyList>
      )}
    </Body>
  )
}
