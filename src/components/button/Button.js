import React, { Component, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/ThemeContext'
import PropTypes from 'prop-types'

const Button = (props) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container
      onClick={props.clicked}
      style={{
        backgroundColor: theme.elements,
        color: theme.text,
        fontSize: props.size,
      }}
    >
      {props.children}
    </Container>
  )
}

const Container = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  box-shadow: 0px 0px 6px 0px rgba(33, 32, 32, 1);
  -webkit-box-shadow: 0px 0px 6px 0px rgba(33, 32, 32, 1);
  -moz-box-shadow: 0px 0px 6px 0px rgba(33, 32, 32, 1);
  & span {
    margin: 0px;
    padding: 0px;
  }
  &:hover {
    box-shadow: 0px 0px 9px 0px rgba(33, 32, 32, 1);
    -webkit-box-shadow: 0px 0px 9px 0px rgba(33, 32, 32, 1);
    -moz-box-shadow: 0px 0px 9px 0px rgba(33, 32, 32, 1);
  }
`

Component.propTypes = {
  size: PropTypes.string,
}

export default Button
