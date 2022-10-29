import React from "react"
import styled from "styled-components"

const Body = styled.button`
  width: 150px;
  height: 42px;
  font-size: 20px;
  margin-bottom: 40px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  transition: all 0.05s;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`

export default function AddButton({ onClick }) {
  return <Body onClick={onClick}>Создать</Body>
}
