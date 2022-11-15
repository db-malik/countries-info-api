import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/ThemeContext'

const Filter = ({ FILTER_TAG }) => {
  const { theme } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)
  const OpenFilterHandler = () => {
    setIsOpen(!isOpen)
  }
  const filterHandler = () => {
    setIsOpen(false)
  }
  return (
    <Container>
      <Button
        style={{ backgroundColor: theme.elements, color: theme.text }}
        onClick={OpenFilterHandler}
      >
        Filter by Region
      </Button>
      {isOpen && (
        <Regions style={{ backgroundColor: theme.elements, color: theme.text }}>
          {FILTER_TAG.map((item) => (
            <Li
              style={{ padding: '4px  0' }}
              key={item}
              onClick={filterHandler}
            >
              {item}
            </Li>
          ))}
        </Regions>
      )}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const Button = styled.p`
  outline-style: none;
  border: none;
  padding: 10px 30px;
  cursor: pointer;
`
const Regions = styled.ul`
  position: absolute;
  margin-top: 4px;
  list-style: none;
  padding: 10px 30px;
  width: 100%;
  z-index: 99;
`

const Li = styled.li`
  &:hover {
    font-weight: bold;
  }
`
export default Filter
