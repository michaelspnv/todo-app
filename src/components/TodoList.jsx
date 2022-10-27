import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const Body = styled.div`
  width: 100%;
`

const EmptyList = styled.p`
  font-size: 30px;
  margin: 0;
`

export default function TodoList({ tasks }) {
  return (
    <Body>
      {tasks.length > 0 ?
        tasks.map(task => <TodoItem key={task.number} number={task.number} title={task.title} />) :
        <EmptyList>
          Список пуст.
        </EmptyList>
      }
    </Body>
  )
}
