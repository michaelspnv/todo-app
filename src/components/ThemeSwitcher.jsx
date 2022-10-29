import React, { useContext } from "react"
import styled from "styled-components"
import ThemeContext from "../contexts/ThemeContext"

const Body = styled.div`
  display: flex;
  align-items: center;
`

const Checkbox = styled.input`
  width: 35px;
  height: 35px;
`

const Label = styled.label`
  font-size: 30px;
  color: var(--main);
`

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark")
    else setTheme("light")
  }

  return (
    <Body>
      <Label for="switcher">Dark Mode:&nbsp;</Label>
      <Checkbox
        checked={theme === "dark"}
        type="checkbox"
        id="switcher"
        onChange={toggleTheme}
      />
    </Body>
  )
}
