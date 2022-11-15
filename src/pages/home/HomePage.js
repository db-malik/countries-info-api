import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Filter from '../../components/filter/Filter'
import Search from '../../components/search/Search'
import { ThemeContext } from '../../context/ThemeContext'

import styled from 'styled-components'
import Loader from '../../components/loader/Loader'
import Card from '../../components/card/Card'

const HomePage = () => {
  const { theme } = useContext(ThemeContext)
  const REGIONS = ['africa', 'Europe', 'Austrilia', 'America', 'Asia']
  const URL = 'https://restcountries.com/v3.1/all'

  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(URL)
        setData(response.data)
      } catch (error) {
        setError(error.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  return (
    <Container style={{ backgroundColor: theme.background, color: theme.text }}>
      <SearchBar>
        <Search />
        <Filter FILTER_TAG={REGIONS}></Filter>
      </SearchBar>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Countries>
          {data.map((item) => (
            <Card key={item.name.common} country={item}></Card>
          ))}
        </Countries>
      )}
    </Container>
  )
}

const Container = styled.div`
  padding: 40px 60px;
`
const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Countries = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5vw;
`
export default HomePage
