import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/ThemeContext'

const Filter = ({ filterHandler }) => {
  const REGIONS = ['Africa', 'Europe', 'Oceania', 'Americas', 'Asia']
  const { theme } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState('Filter by Region')

  const toggleFilterHandler = () => {
    setIsOpen(!isOpen)
  }

  const showSelectedItem = (item) => {
    setSelectedItem(item)
    toggleFilterHandler()
  }

  return (
    <Container>
      <Button
        style={{ backgroundColor: theme.elements, color: theme.text }}
        onClick={toggleFilterHandler}
      >
        {selectedItem}
      </Button>
      {isOpen && (
        <Regions style={{ backgroundColor: theme.elements, color: theme.text }}>
          <Li
            style={{ padding: '4px  0' }}
            onClick={() => {
              filterHandler('All')
              showSelectedItem('All country')
            }}
          >
            All
          </Li>
          {REGIONS.map((item) => (
            <Li
              style={{ padding: '4px  0' }}
              key={item}
              onClick={() => {
                filterHandler(item)
                showSelectedItem(item)
              }}
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
  width: 200px;
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
