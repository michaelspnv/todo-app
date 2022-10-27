import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  margin: 50px auto;
`

export default function Wrapper({ children }) {
  return (
    <Body>
      {children}
    </Body>
  )
}
