import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/ThemeContext'

const Search = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Input
      style={{ backgroundColor: theme.elements, color: theme.text }}
      type="text"
      placeholder="Search fro a country..."
    />
  )
}

const Input = styled.input`
  padding: 10px 20px;
  width: 300px;
  outline-style: none;
  border: none;
`

export default Search
