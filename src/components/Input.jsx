import React from "react"
import styled from "styled-components"

const Body = styled.input`
  width: 500px;
  height: 20px;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 15px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 767px) {
    max-width: 60%;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    padding: 5px;
  }
`

export default function Input({ onChange, value, input }) {
  return (
    <React.Fragment>
      <Body
        onChange={onChange}
        value={value}
        ref={input}
        placeholder="Какое-то важное дело..."
      />
    </React.Fragment>
  )
}
