import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import List from '../../components/list/List'
import Filter from '../../components/filter/Filter'
import Search from '../../components/search/Search'

import { ThemeContext } from '../../context/ThemeContext'

const HomePage = () => {
  const { theme } = useContext(ThemeContext)

  const [searchText, setSearchText] = useState('')
  const [regionFilter, setRegionFilter] = useState('All')

  const searchHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase()
    setSearchText(lowerCase)
  }

  const filterHandler = (filter) => {
    setRegionFilter(filter)
  }

  return (
    <Container style={{ backgroundColor: theme.background, color: theme.text }}>
      <SearchBar>
        <Search onSearch={searchHandler} value={searchText} />
        <Filter filterHandler={filterHandler}></Filter>
      </SearchBar>

      <List searchText={searchText} regionFilter={regionFilter} />
    </Container>
  )
}

//----- STYLE -----------------
const Container = styled.div`
  padding: 40px 50px;
`
const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`

export default HomePage
