import React from "react"
import styled from "styled-components"

const Body = styled.h1`
  font-size: 50px;
  color: var(--main);

  @media (max-width: 400px) {
    font-size: 30px;
  }
`

export default function Title() {
  return <Body>Plan Your Day</Body>
}
