import React from 'react'
import styled from 'styled-components'
import DeleteButton from './DeleteButton'

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
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

export default function TodoItem({ number, title }) {
  return (
    <Body>
      <Number>{number}.</Number>
      <Title>{title}</Title>
      <ControlPanel>
        <DeleteButton />
        <MoveButton>...</MoveButton>
      </ControlPanel>
    </Body>
  )
}
