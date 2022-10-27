import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyles = createGlobalStyle`
  ${normalize}

  .page {
    font-family: "Segoe UI", sans-serif;
    text-align: center;
  }
`

export default GlobalStyles
