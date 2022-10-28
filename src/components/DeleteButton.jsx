import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  background-color: #ff5349;
  margin-right: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`

const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 55%;
  width: 40%;
  height: 1px;
  background-color: #000;

  &:first-child {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:last-child {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`

export default function DeleteButton({ deleteTask }) {
  return (
    <Body onClick={deleteTask}>
      <Line />
      <Line />
    </Body>
  )
}
