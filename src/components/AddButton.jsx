import React from "react"
import styled from "styled-components"

const Body = styled.button`
  width: 150px;
  height: 42px;
  font-size: 20px;
  margin-bottom: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: var(--add-btn-bg-color);
  transition: all 0.1s;
  cursor: pointer;

  &:hover {
    background-color: var(--add-btn-hov-bg-color);
    border-color: var(--add-btn-hov-border-color);
  }
`

export default function AddButton({ onClick }) {
  return <Body onClick={onClick}>Создать</Body>
}
