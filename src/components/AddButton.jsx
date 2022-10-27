import React from 'react'
import styled from 'styled-components'

const Body = styled.button`
  width: 150px;
  height: 42px;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffff00;
  cursor: pointer;

  &:hover {
    border-color: #999;
  }
`

export default function AddButton({ onClick }) {
  return (
    <Body onClick={onClick}>
      Создать
    </Body>
  )
}
