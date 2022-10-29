import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyles = createGlobalStyle`
  ${normalize}

  .page[data-theme="light"] {
    --main: #000;
    --bg-color: #fff;
    --add-btn-bg-color: #ffff19;
    --add-btn-hov-bg-color: #ffff19;
    --add-btn-hov-border-color: #000;
    --todo-item-border-color: #ccc;
  }

  .page[data-theme="dark"] {
    --main: rgba(255, 255, 255, .9);
    --bg-color: #121212;
    --add-btn-bg-color: rgba(255, 255, 255, 0.9);
    --add-btn-hov-bg-color: #fff;
    --add-btn-hov-border-color: #ccc;
    --todo-item-border-color: #666;
  }

  .page {
    font-family: "Segoe UI", sans-serif;
    text-align: center;
    background-color: var(--bg-color);
  }
`

export default GlobalStyles
