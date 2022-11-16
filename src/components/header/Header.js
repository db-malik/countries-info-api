import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/ThemeContext'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'

const Header = () => {
  const { theme, themeHandler } = useContext(ThemeContext)

  return (
    <Container style={{ backgroundColor: theme.elements, color: theme.text }}>
      <Title>Where in the world?</Title>
      <Theme onClick={themeHandler}>
        {theme.type === 'light' ? (
          <span>
            <BsMoonFill /> Dark mode
          </span>
        ) : (
          <span>
            <BsSunFill /> Light mode
          </span>
        )}
      </Theme>
    </Container>
  )
}

//  style begins
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
`

const Title = styled.h1``
const Theme = styled.p`
  cursor: pointer;
`

export default Header
